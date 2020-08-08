let {formatLine, isNull} = require('../helpers');

let divExpr = /^1Div([0-9]+)$/

let divideFormat = function(match, line, converter) {
    converter.addRequires('div');
    return formatLine(`div(${match[1]})`, line, converter);
};

let formatScale = function(value, line, converter) {
    if (isNull(value.str)) return line;
    let match = value.str.match(divExpr);
    if (match) return divideFormat(match, line, converter);
    converter.addRequires('def');
    return formatLine(`def('${value.str}')`, line, converter);
}

module.exports = {
    type: 'mathExpr',
    name: 'scale',
    priority: 0,
    handle: (value, line, converter) => {
        if (!value || value.str === '1') return line;
        if (value.type === 'identifier')
            return formatScale(value, line, converter);
        converter.addRequires('scale');
        return `scale(${value.str}, ${line})`;
    }
};
