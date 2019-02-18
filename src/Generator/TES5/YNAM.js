let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = game => {
    addDef('YNAM', 
        subrecord('YNAM', ckFormId('Sound - Pick Up', ['SNDR'])),
    );
};