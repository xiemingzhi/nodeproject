#!/usr/bin/env node

const fs = require('fs');

fs.readFile('./cdcatalog.xml', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

