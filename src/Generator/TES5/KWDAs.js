let {
    addDef, ckFormId, subrecord, array
} = require('../helpers');

module.exports = () => {
    addDef('KWDAs', subrecord('KWDA', array('Keywords', ckFormId('Keyword', ['KYWD', 'NULL']))));
};