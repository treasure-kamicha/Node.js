const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('welcome.txt file created!');

const data = fs.readFileSync('welcome.txt', 'utf8');
console.log('File Content:', data);