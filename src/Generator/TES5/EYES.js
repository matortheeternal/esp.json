let {
    def, subrecord, string, req, uint8, 
    record
} = require('../helpers');

module.exports = () => {
    record('EYES', 'Eyes', {
        flags: {
            "2": "Non-Playable"
        },
        members: [
            def('EDID'),
            def('FULLReq'),
            req(subrecord('ICON', string('Texture'))),
            subrecord('DATA', uint8('Flags', {
                "0": "Playable",
                "1": "Not Male",
                "2": "Not Female",
                "3": "Unknown 4",
                "4": "Unknown 5",
                "5": "Unknown 6",
                "6": "Unknown 7",
                "7": "Unknown 8"
            }))
        ]
    })
};