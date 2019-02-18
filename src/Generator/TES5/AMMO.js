let {
    addDef, record, def, req, IsSSE, 
    subrecord, struct, ckFormId, flags32, float, 
    uint32, zstring
} = require('../helpers');

module.exports = game => {
    addDef(record('AMMO', 'Ammunition', {
        flags: {
            2: 'Non-Playable',                              // 0x00000004
        },
        elements: [
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
                    flags32('Flags', [
                        'Ignores Normal Weapon Resistance',
                        'Non-Playable',
                        'Non-Bolt',
                    ]),
                    float('Damage'),
                    uint32('Value'),
                    float('Weight'),
                ]))),
                req(subrecord('DATA', struct('Data', [
                    ckFormId('Projectile', ['PROJ', 'NULL']),
                    flags32('Flags', [
                        'Ignores Normal Weapon Resistance',
                        'Non-Playable',
                        'Non-Bolt',
                    ]),
                    float('Damage'),
                    uint32('Value'),
                ]))),
            ]),
            subrecord('ONAM', zstring('Short Name')),
        ]
    }));
};