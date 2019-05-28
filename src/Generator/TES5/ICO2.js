let {
    addDef, subrecord, string, req, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('ICO2', req(multiStruct(Icon 2 (female), [
        req(subrecord('ICO2', string('Large Icon FileName'))),
        subrecord('MIC2', string('Small Icon FileName'))
    ])));
};