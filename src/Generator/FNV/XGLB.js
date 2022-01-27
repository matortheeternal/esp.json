let {
    addDef, ckFormId, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XGLB', 
        subrecord('XGLB', ckFormId('Global variable', ['GLOB']))
    );
};