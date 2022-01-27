let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('ZNAM', 
        subrecord('ZNAM', ckFormId('Sound - Drop', ['SOUN']))
    );
};