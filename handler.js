const fs = require('fs');
const file = require('./sample-file.yaml');

export const loadFile = () => {
  console.log(fs.readFileSync(file, 'utf8'));
};

export default {
  loadFile
};
