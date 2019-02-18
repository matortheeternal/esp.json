let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = game => {
    addDef('ZNAM', 
        subrecord('ZNAM', ckFormId('Sound - Put Down', ['SNDR'])),
    );
};