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
npm install googleapis
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
