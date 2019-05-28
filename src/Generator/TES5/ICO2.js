let {
    addDef, subrecord, cstring, req, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('ICO2', req(multiStruct('Icon 2 (female)', [
        req(subrecord('ICO2', cstring('Large Icon FileName'))),
        subrecord('MIC2', cstring('Small Icon FileName'))
    ])));
};