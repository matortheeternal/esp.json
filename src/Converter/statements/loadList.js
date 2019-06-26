let {statementConverter} = require('../converters');

let loadListExpr = /^s := ExtractFilePath[\s\S]+?end;/;

statementConverter('loadList', {
    test: parser => parser.match(loadListExpr)
});
