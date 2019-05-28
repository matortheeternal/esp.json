let {
    addDef, subrecord, string, req, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('ICON', req(multiStruct(Icon, [
        req(subrecord('ICON', string('Large Icon FileName'))),
        subrecord('MICO', string('Small Icon FileName'))
    ])));
};