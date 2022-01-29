let schemaBuilder = require('../src/SchemaBuilder'),
    path = require('path'),
    fs = require('fs');

let projectPath = path.resolve(__dirname, '..');

let buildSchema = function(schemaPathParts, output) {
    let schemaPath = path.resolve(...schemaPathParts);
    console.log('Building', schemaPath);
    let builtSchema = schemaBuilder.build(schemaPath);
    fs.writeFileSync(output, JSON.stringify(builtSchema, null, 4));
};

buildSchema(
    [projectPath, 'schema', 'gameDefinitionFile.schema.json'],
    'schema.json'
);

buildSchema(
    [projectPath, 'schema', 'definitionEntry.schema.json'],
    'definitionEntrySchema.json'
);
