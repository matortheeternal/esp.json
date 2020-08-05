let {
    addDef, ckFormId, subrecord, sorted, array, 
    elementCounter
} = require('../helpers');

module.exports = () => {
    addDef('ReqKWDAs', 
        subrecord('KWDA', elementCounter('KSIZ - Keyword Count', 
            sorted(array('Keywords', 
                ckFormId('Keyword', ['KYWD', 'NULL'])
            ))
        ))
    );
};