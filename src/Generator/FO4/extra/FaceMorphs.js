let {
    addDef, def, uint32, format, subrecord,
    localized, string, memberStruct
} = require('../../helpers');

module.exports = () => {
    addDef('FaceMorphs', {
        type: 'memberArray',
        member: memberStruct('Face Morph', [
            subrecord('FMRI', format(uint32('Index'), def('IntToHexStr'))),
            subrecord('FMRN', localized(string('Name')))
        ])
    });
};
