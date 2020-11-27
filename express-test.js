const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const port = 3000

var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))