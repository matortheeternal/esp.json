let {
    addDef, string, subrecord, req, memberStruct, 
    unordered
} = require('../helpers');

module.exports = () => {
    addDef('ICON', 
        unordered(memberStruct('Icon', [
            req(subrecord('ICON', string('Large Icon FileName'))),
            subrecord('MICO', string('Small Icon FileName'))
        ]))
    );
};