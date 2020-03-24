const fs = require('fs');
fs.mkdirSync('docs')
fs.writeFileSync('docs/hello.txt', 'Hello from Node.js');

