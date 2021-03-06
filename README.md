# webproject
HTML CSS Javascript

Some examples using HTML5, CSS3, Javascript.
Use at your own risk.

# atom

atom-runner  
git-plus  
refactor  
js-refactor  

# vs code

Install extensions:
- live server  
- Markdown all in one  
- Git History  

# nodejs
Node.js is built against modern versions of V8. New features from [JavaScript ECMA-262 specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm) are constantly being added. See [node.green](https://node.green/) for compatibility.
- https://node.green/#ES2015
- https://node.green/#ES2016
- https://node.green/#ES2017
- https://node.green/#ES2018
- https://node.green/#ES2019
- https://node.green/#ES2020
- https://node.green/#ESNEXT
  - https://node.green/#ESNEXT-candidate--stage-3- (Public Private class fields)

# Requirements

* nodejs 10.15
* npm 6.14 
  
```
npm install --global npm@latest
npm install mysql
npm install randomstring
npm install --save random-email
npm install cassandra-driver
npm install googleapis
//npm install @stdlib/stdlib
```

@stdlib currently having problems installing in windows
```
$ npm install
npm ERR! code EINVALIDPACKAGENAME
npm ERR! Invalid package name "@stdlib/array\buffer": name can only contain URL-friendly characters
```
remove from package.json 
```
    "@stdlib/stdlib": "0.0.91",
```

# cassandra

```
CREATE KEYSPACE contactdbs WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };
USE contactdbs;

CREATE TABLE contact (
  email text,
  firstName text,
  lastName text,
  PRIMARY KEY (email));
```

# server sent events 
Start server
```
npm install --save express body-parser cors
node server.js 
```
Start listener
```
curl -H Accept:text/event-stream http://localhost:3000/events
```
Create message
```
curl -X POST \
 -H "Content-Type: application/json" \
 -d '{"name": "princess", "msg": "hello world"}'\
 -s http://localhost:3000/message
```

# swagger install 

```
npm install swagger-ui-express
npm install --save yamljs
node express-test.js 
```

open browser
http://localhost:3000/api-docs/
