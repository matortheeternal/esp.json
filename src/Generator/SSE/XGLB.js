let {
    addDef, subrecord, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('XGLB', 
        subrecord('XGLB', ckFormId('Global variable', ['GLOB']))
    );
};