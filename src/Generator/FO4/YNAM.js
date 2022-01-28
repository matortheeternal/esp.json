let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('YNAM', 
        subrecord('YNAM', ckFormId('Sound - Pick Up', ['SNDR']))
    );
};