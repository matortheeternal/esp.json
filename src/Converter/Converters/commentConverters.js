let { LineExpr } = require('../helpers');

let commentConverters = {
    name: 'Comment',
    expr: LineExpr(`(//[^\\n]+|{[^}]+})`),
    process: () => {}
};

module.exports = commentConverters;