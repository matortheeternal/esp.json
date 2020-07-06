let {
    def, req, subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('ASPC', 'Acoustic Space', {
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('SNAM', ckFormId('Ambient Sound', ['SNDR'])),
            subrecord('RDAT', ckFormId('Use Sound from Region (Interiors Only)', ['REGN'])),
            subrecord('BNAM', ckFormId('Environment Type (reverb)', ['REVB']))
        ]
    })
};