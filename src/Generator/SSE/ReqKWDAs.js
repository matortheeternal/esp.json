let {
    addDef, ckFormId, subrecord, sorted, array
} = require('../helpers');

module.exports = () => {
    addDef('ReqKWDAs', 
        subrecord('KWDA', sorted(array('Keywords', 
            ckFormId('Keyword', ['KYWD', 'NULL'])
        )))
    );
};