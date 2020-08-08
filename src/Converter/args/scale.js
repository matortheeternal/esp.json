let {formatLine, isNull} = require('../helpers');

module.exports = {
    type: 'mathExpr',
    name: 'scale',
    priority: 0,
    handle: (value, line, converter) => {
        if (!value || value.str === '1') return line;
        if (value.type === 'identifier') {
            if (isNull(value.str)) return line;
            converter.addRequires('def');
            return formatLine(`def('${value.str}')`, line, converter);
        }
        converter.addRequires('scale');
        return `scale(${value.str}, ${line})`;
    }
};
