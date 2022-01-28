let {addDef, enumeration, opts} = require('../../helpers');

module.exports = () => {
    addDef('CtdaTypeEnum', opts(enumeration({
        0x00: 'Equal to',
        0x20: 'Not equal to',
        0x40: 'Greater than',
        0x60: 'Greater than or equal to',
        0x80: 'Less than',
        0xA0: 'Less than or equal to'
    }), {
        unknownOption: '<Unknown Compare operator>'
    }));
};
