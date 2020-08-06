let {
    addDef, uint32, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('KSIZ', 
        subrecord('KSIZ', uint32('Keyword Count'))
    );
};