let {
    addDef, multiStruct, subrecord, zstring, req
} = require('../helpers');

module.exports = game => {
    addDef('ICONReq', 
        req(multiStruct('Icon', [
            subrecord('ICON', zstring('Large Icon filename')),
            subrecord('MICO', zstring('Small Icon filename')),
        ])),
    );
};