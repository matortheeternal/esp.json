let {formatLine} = require('../helpers');

module.exports = {
    type: 'mathExpr',
    name: 'scale',
    priority: 0,
    handle: (value, line, converter) => {
        if (!value || value.str === '1') return line;
        if (value.type === 'identifier')
            return formatLine(`'${value.str}'`, line, converter);
        converter.addRequires('scale');
        return `scale(${value.str}, ${line})`;
    }
};
