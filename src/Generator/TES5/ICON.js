let {
    addDef, subrecord, cstring, req, multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('ICON', req(multiStruct('Icon', [
        req(subrecord('ICON', cstring('Large Icon FileName'))),
        subrecord('MICO', cstring('Small Icon FileName'))
    ])));
};