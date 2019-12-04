/*
https://www.npmjs.com/package/axios
*/
const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
axios.get(url).then(response => console.log(response.data));