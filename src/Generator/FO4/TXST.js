let {
    def, req, string, subrecord, memberStruct, 
    flags, uint16, format, record
} = require('../helpers');

module.exports = () => {
    record('TXST', 'Texture Set', {
        members: [
            def('EDID'),
            req(def('OBND')),
            memberStruct('Textures (RGB/A)', [
                subrecord('TX00', string('Difuse')),
                subrecord('TX01', string('Normal/Gloss')),
                subrecord('TX03', string('Glow')),
                subrecord('TX04', string('Height')),
                subrecord('TX05', string('Environment')),
                subrecord('TX02', string('Wrinkles')),
                subrecord('TX06', string('Multilayer')),
                subrecord('TX07', string('Smooth Spec'))
            ]),
            def('DODT'),
            req(subrecord('DNAM', format(uint16('Flags'), flags({
                0: 'No Specular Map',
                1: 'Facegen Textures',
                2: 'Has Model Space Normal Map'
            })))),
            subrecord('MNAM', string('Material'))
        ]
    })
};