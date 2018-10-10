#!/usr/bin/env node

const fs = require('fs');
var userProductDict = new Map();

fs.readFile('./data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  //console.log(data);
});

const readline = require('readline');

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./data.txt')
});

lineReader.on('line', (input) => {
  var inputArr = input.split("\t");
  if (inputArr[0] != 'User ID') {
    console.log(`Received: ${inputArr[0]} and ${inputArr[1]}`);
    if (userProductDict.get(inputArr[0]) == null)
      userProductDict.set(inputArr[0], new Set([inputArr[1]]));
    else
      userProductDict.get(inputArr[0]).add(inputArr[1]);
  }
});

lineReader.on('close', (input) => {
  console.log("map size " + userProductDict.size);
  for (var user of userProductDict.keys()) {
    for (let product of userProductDict.get(user).values()) {
      console.log("user " + user + " product " + product);
    }
  }
});
