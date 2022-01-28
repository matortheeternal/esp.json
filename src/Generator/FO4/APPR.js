let {
    addDef, ckFormId, array, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('APPR', 
        subrecord('APPR', array('Attach Parent Slots', 
            ckFormId('Keyword', ['KYWD'])
        ))
    );
};