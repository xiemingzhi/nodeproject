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

```
npm install --global npm@latest
npm install mysql
npm install randomstring
npm install --save random-email
npm install cassandra-driver
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

# babel 

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

Execute on command line (not recommended):  
```
./node_modules/.bin/babel *.js --out-dir lib
Successfully compiled 16 files with Babel.
...
>node lib/module-es6-example.js
```

Recommended edit package.json:  
```
  "scripts": {
    "build": "babel *.js -d dist",
    "start": "npm run build && node dist/module-es6-example.js"
   },
...
npm start
```

Optional:  
Install [babel-node](https://babeljs.io/docs/en/babel-node)  
```
npm install --save-dev @babel/core @babel/node
npx babel-node
npx babel-node --debug --presets @bable/env lib/module-es6-example.js
```
