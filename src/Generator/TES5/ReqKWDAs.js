let {
    addDef, ckFormId, subrecord, array
} = require('../helpers');

module.exports = () => {
    addDef('ReqKWDAs', subrecord('KWDA', array('Keywords', ckFormId('Keyword', ['KYWD', 'NULL']))));
};