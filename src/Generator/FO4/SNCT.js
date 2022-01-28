let {
    def, flags, uint32, format, subrecord, 
    req, ckFormId, div, uint16, float, 
    record
} = require('../helpers');

module.exports = () => {
    record('SNCT', 'Sound Category', {
        members: [
            def('EDID'),
            def('FULL'),
            req(subrecord('FNAM', format(uint32('Flags'), flags({
                0: 'Mute When Submerged',
                1: 'Should Appear on Menu',
                2: 'Immune to Time Speedup',
                3: 'Pause During Menus (Immed)',
                4: 'Pause During Menus (Fade)',
                5: 'Exclude from Player OPM Override',
                6: 'Pause During Start Menu'
            })))),
            subrecord('PNAM', ckFormId('Parent Category', ['SNCT'])),
            subrecord('ONAM', ckFormId('Menu Slider Category', ['SNCT'])),
            subrecord('VNAM', format(uint16('Static Volume Multiplier'), div(65535))),
            subrecord('UNAM', format(uint16('Default Menu Value'), div(65535))),
            subrecord('MNAM', float('Min Frequency Multiplier')),
            subrecord('CNAM', float('Sidechain Target Multiplier'))
        ]
    })
};