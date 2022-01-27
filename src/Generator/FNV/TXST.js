let {
    req, def, string, subrecord, memberStruct, 
    flags, uint16, format, record
} = require('../helpers');

module.exports = () => {
    record('TXST', 'Texture Set', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            memberStruct('Textures (RGB/A)', [
                subrecord('TX00', string('Base Image / Transparency')),
                subrecord('TX01', string('Normal Map / Specular')),
                subrecord('TX02', string('Environment Map Mask / ?')),
                subrecord('TX03', string('Glow Map / Unused')),
                subrecord('TX04', string('Parallax Map / Unused')),
                subrecord('TX05', string('Environment Map / Unused'))
            ]),
            def('DODT'),
            req(subrecord('DNAM', format(uint16('Flags'), flags({
                0: 'No Specular Map'
            }))))
        ]
    })
};