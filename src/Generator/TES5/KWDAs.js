let {
    addDef, ckFormId, sorted, array, elementCounter, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('KWDAs', 
        subrecord('KWDA', elementCounter('KSIZ - Keyword Count', 
            sorted(array('Keywords', 
                ckFormId('Keyword', ['KYWD', 'NULL'])
            ))
        ))
    );
};