let {
    req, def, ckFormId, subrecord, float, 
    flags, uint32, format, struct, record
} = require('../helpers');

module.exports = () => {
    record('EXPL', 'Explosion', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('EITM'),
            subrecord('MNAM', ckFormId('Image Space Modifier', ['IMAD'])),
            req(subrecord('DATA', struct('Data', [
                float('Force'),
                float('Damage'),
                float('Radius'),
                ckFormId('Light', ['LIGH', 'NULL']),
                ckFormId('Sound 1', ['SOUN', 'NULL']),
                format(uint32('Flags'), flags({
                    0: 'Unknown 1',
                    1: 'Always Uses World Orientation',
                    2: 'Knock Down - Always',
                    3: 'Knock Down - By Formula',
                    4: 'Ignore LOS Check',
                    5: 'Push Explosion Source Ref Only',
                    6: 'Ignore Image Space Swap'
                })),
                float('IS Radius'),
                ckFormId('Impact DataSet', ['IPDS', 'NULL']),
                ckFormId('Sound 2', ['SOUN', 'NULL']),
                struct('Radiation', [
                    float('Level'),
                    float('Dissipation Time'),
                    float('Radius')
                ]),
                req(format(uint32('Sound Level'), def('SoundLevelEnum')))
            ]))),
            subrecord('INAM', ckFormId('Placed Impact Object', [
                'TREE', 'SOUN', 'ACTI', 'DOOR', 'STAT',
                'FURN', 'CONT', 'ARMO', 'AMMO', 'LVLN',
                'LVLC', 'MISC', 'WEAP', 'BOOK', 'KEYM',
                'ALCH', 'LIGH', 'GRAS', 'ASPC', 'IDLM',
                'ARMA', 'MSTT', 'NOTE', 'PWAT', 'SCOL',
                'TACT', 'TERM', 'TXST', 'CHIP', 'CMNY',
                'CCRD', 'IMOD'
            ]))
        ]
    })
};