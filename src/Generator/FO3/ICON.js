let {
    addDef, string, subrecord, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('ICON', 
        memberStruct('Icon', [
            subrecord('ICON', string('Large Icon FileName')),
            subrecord('MICO', string('Small Icon FileName'))
        ])
    );
};