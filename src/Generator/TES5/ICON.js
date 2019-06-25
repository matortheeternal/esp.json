let {
    addDef, subrecord, string, req, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('ICON', 
        req(memberStruct('Icon', [
            req(subrecord('ICON', string('Large Icon FileName'))),
            subrecord('MICO', string('Small Icon FileName'))
        ]))
    );
};