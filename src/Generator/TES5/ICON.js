let {
    addDef, string, subrecord, req, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('ICON', 
        memberStruct('Icon', [
            req(subrecord('ICON', string('Large Icon FileName'))),
            subrecord('MICO', string('Small Icon FileName'))
        ])
    );
};