let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('ZNAM', 
        subrecord('ZNAM', ckFormId('Sound - Put Down', ['SNDR'])),
    );
};