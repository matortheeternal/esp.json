let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('YNAM', 
        subrecord('YNAM', ckFormId('Sound - Pick Up', ['SNDR'])),
    );
};