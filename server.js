// Require needed modules and initialize Express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// GET /events endpoint
function eventsHandler(req, res, next) {
  // Mandatory headers and http status to keep connection open
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  res.writeHead(200, headers);
  // After client opens connection send all messages as string
  const event = `event: allmessages\n`;
  res.write(event);
  const data = `data: ${JSON.stringify(messages)}\n\n`;
  res.write(data);
  // Generate an id based on timestamp and save res
  // object of client connection on clients list
  // Later we'll iterate it and send updates to each client
  const clientId = Date.now();
  const newClient = {
    id: clientId,
    res
  };
  clients.push(newClient);
  // When client closes connection we update the clients list
  // avoiding the disconnected one
  req.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(c => c.id !== clientId);
  });
}

// Send new message to all clients
function sendEventsToAll(newmessage) {
  clients.forEach(c => {
    c.res.write(`event: newmessage\n`)
    c.res.write(`data: ${JSON.stringify(newmessage)}\n\n`)
  })
}

// POST /message endpoint
// put new message onto queue
async function addMessage(req, res, next) {
  const newmessage = req.body;
  messages.push(newmessage);
  // Send recently added message as POST result
  res.json(newmessage)
  // Invoke iterate and send function
  return sendEventsToAll(newmessage);
}

// Set cors and bodyParser middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Define endpoints
app.post('/message', addMessage);
app.get('/events', eventsHandler);
app.get('/status', (req, res) => res.json({clients: clients.length}));
const PORT = 3000;
let clients = [];
let messages = [];
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
