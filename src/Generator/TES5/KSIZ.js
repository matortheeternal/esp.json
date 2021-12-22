let {
    addDef, uint32, conflict, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('KSIZ', 
        subrecord('KSIZ', conflict('Benign', uint32('Keyword Count')))
    );
};