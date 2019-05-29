let types = {};

let typeParser = function(name, parser) {
  types[name] = parser;
};

let resolveType = function(name) {
  let type = types[name];
  if (!type) throw new Error('Could not find type with name ' + name);
  return type;
};

module.exports = {typeParser, resolveType};