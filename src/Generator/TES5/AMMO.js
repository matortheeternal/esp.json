let {
    flags, def, req, ckFormId, uint32, 
    format, float, struct, subrecord, IsSSE, 
    string, record
} = require('../helpers');

module.exports = game => {
    record('AMMO', 'Ammunition', {
        flags: flags({
            2: 'Non-Playable',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('MODL'),
            def('ICON'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('DESC'),
            def('KSIZ'),
            def('KWDAs'),
            IsSSE(game, [
                req(subrecord('DATA', struct('Data', [
                    ckFormId('Projectile', ['PROJ', 'NULL']),
                    format(uint32('Flags'), flags({
                        0: 'Ignores Normal Weapon Resistance',
                        1: 'Non-Playable',
                        2: 'Non-Bolt'
                    })),
                    float('Damage'),
                    uint32('Value'),
                    float('Weight')
                ]))),
                req(subrecord('DATA', struct('Data', [
                    ckFormId('Projectile', ['PROJ', 'NULL']),
                    format(uint32('Flags'), flags({
                        0: 'Ignores Normal Weapon Resistance',
                        1: 'Non-Playable',
                        2: 'Non-Bolt'
                    })),
                    float('Damage'),
                    uint32('Value')
                ])))
            ]),
            subrecord('ONAM', string('Short Name'))
        ]
    })
};