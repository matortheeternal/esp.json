let {
    def, req, subrecord, string, multiStruct, 
    flags, uint16, format, record
} = require('../helpers');

module.exports = () => {
    record('TXST', 'Texture Set', {
        members: [
            def('EDID'),
            req(def('OBND')),
            multiStruct('Textures (RGB/A)', [
                subrecord('TX00', string('Difuse')),
                subrecord('TX01', string('Normal/Gloss')),
                subrecord('TX02', string('Environment Mask/Subsurface Tint')),
                subrecord('TX03', string('Glow/Detail Map')),
                subrecord('TX04', string('Height')),
                subrecord('TX05', string('Environment')),
                subrecord('TX06', string('Multilayer')),
                subrecord('TX07', string('Backlight Mask/Specular'))
            ]),
            def('DODT'),
            subrecord('DNAM', format(uint16('Flags'), flags({
                0: 'No Specular Map',
                1: 'Facegen Textures',
                2: 'Has Model Space Normal Map'
            })))
        ]
    })
};