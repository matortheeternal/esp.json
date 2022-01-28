let {
    def, uint32, array, ckFormId, struct, 
    union, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('DMGT', 'Damage Type', {
        members: [
            def('EDID'),
            subrecord('DNAM', union('Data', 'FormVer78Decider', [
                array('Damage Types', 
                    uint32('Actor Value Index')
                ),
                array('Damage Types', 
                    struct('Damage Type', [
                        ckFormId('Actor Value', ['AVIF', 'NULL']),
                        ckFormId('Spell', ['SPEL', 'NULL'])
                    ])
                )
            ]))
        ]
    })
};