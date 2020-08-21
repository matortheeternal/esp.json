let {
    addDef, string, subrecord, req, memberStruct, 
    unordered
} = require('../helpers');

module.exports = () => {
    addDef('ICO2', 
        unordered(memberStruct('Icon 2 (female)', [
            req(subrecord('ICO2', string('Large Icon FileName'))),
            subrecord('MIC2', string('Small Icon FileName'))
        ]))
    );
};