let {
    addDef, ckFormId, sorted, array, elementCounter, 
    subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('KWDAs', 
        req(subrecord('KWDA', elementCounter('KSIZ - Keyword Count', 
            sorted(array('Keywords', 
                ckFormId('Keyword', ['KYWD', 'NULL'])
            ))
        )))
    );
};