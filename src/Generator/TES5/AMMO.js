let {
    def, ckFormId, uint32, float, subrecord, 
    struct, req, IsSSE, string, record
} = require('../helpers');

module.exports = game => {
    record('AMMO', 'Ammunition', {
        flags: {
            "2": "Non-Playable"
        },
        members: [
            def('EDID'),
            def('OBNDReq'),
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
                    uint32('Flags', {
                        "0": "Ignores Normal Weapon Resistance",
                        "1": "Non-Playable",
                        "2": "Non-Bolt"
                    }),
                    float('Damage'),
                    uint32('Value'),
                    float('Weight')
                ]))),
                req(subrecord('DATA', struct('Data', [
                    ckFormId('Projectile', ['PROJ', 'NULL']),
                    uint32('Flags', {
                        "0": "Ignores Normal Weapon Resistance",
                        "1": "Non-Playable",
                        "2": "Non-Bolt"
                    }),
                    float('Damage'),
                    uint32('Value')
                ])))
            ]),
            subrecord('ONAM', string('Short Name'))
        ]
    })
};