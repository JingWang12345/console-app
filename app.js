
const fs = require('fs');

let data;
try {

    data = fs.readFileSync('./data/test.csv', 'utf8');
    console.log(data);
    const json = parseCsvToJSON(data);
    writeJsonToFile(json); 

  } catch (err) {
    console.error(err);
  }

  function parseCsvToJSON(data) {
    
  }

  function writeJsonToFile(json) {

try {
  fs.writeFileSync('./output/test.json', json);
  // file written successfully
} catch (err) {
  console.error(err);
}
  }