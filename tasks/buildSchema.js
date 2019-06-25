let schemaBuilder = require('../src/SchemaBuilder'),
    path = require('path'),
    fs = require('fs');

let projectPath = path.resolve(__dirname, '..'),
    filename = 'gameDefinitionFile.schema.json',
    schemaPath = path.resolve(projectPath, 'schema', filename);

console.log('Building', schemaPath);
let builtSchema = schemaBuilder.build(schemaPath);
fs.writeFileSync('schema.json', JSON.stringify(builtSchema, null, 4));
