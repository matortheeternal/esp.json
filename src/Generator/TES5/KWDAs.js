let {
    addDef, ckFormId, subrecord, sorted, array
} = require('../helpers');

module.exports = () => {
    addDef('KWDAs', 
        subrecord('KWDA', sorted(array('Keywords', 
            ckFormId('Keyword', ['KYWD', 'NULL'])
        )))
    );
};