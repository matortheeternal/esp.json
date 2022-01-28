let {
    def, req, ckFormId, subrecord, uint8, 
    format, div, uint16, record
} = require('../helpers');

module.exports = () => {
    record('ASPC', 'Acoustic Space', {
        members: [
            def('EDID'),
            req(def('OBND')),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR'])),
            subrecord('RDAT', ckFormId('Use Sound from Region (Interiors Only)', ['REGN'])),
            subrecord('BNAM', ckFormId('Environment Type', ['REVB'])),
            req(subrecord('XTRI', format(uint8('Is Interior'), def('BoolEnum')))),
            subrecord('WNAM', format(uint16('Weather Attenuation (dB)'), div(100)))
        ]
    })
};