let {
    def, req, subrecord, cstring, multiStruct, 
    uint16, format, record
} = require('../helpers');

module.exports = () => {
    record('TXST', 'Texture Set', {
        members: [
            def('EDID'),
            req(def('OBND')),
            multiStruct('Textures (RGB/A)', [
                subrecord('TX00', cstring('Difuse')),
                subrecord('TX01', cstring('Normal/Gloss')),
                subrecord('TX02', cstring('Environment Mask/Subsurface Tint')),
                subrecord('TX03', cstring('Glow/Detail Map')),
                subrecord('TX04', cstring('Height')),
                subrecord('TX05', cstring('Environment')),
                subrecord('TX06', cstring('Multilayer')),
                subrecord('TX07', cstring('Backlight Mask/Specular'))
            ]),
            def('DODT'),
            subrecord('DNAM', format(uint16('Flags'), {
                "0": "No Specular Map",
                "1": "Facegen Textures",
                "2": "Has Model Space Normal Map"
            }))
        ]
    })
};