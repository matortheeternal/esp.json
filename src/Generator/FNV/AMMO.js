let {
    req, def, float, flags, uint8, 
    format, bytes, size, int32, struct, 
    subrecord, uint32, ckFormId, string, conflictType, 
    opts, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('AMMO', 'Ammunition', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(def('FULL')),
            def('MODL'),
            def('ICON'),
            def('SCRI'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', struct('Data', [
                float('Speed'),
                format(uint8('Flags'), flags({
                    0: 'Ignores Normal Weapon Resistance',
                    1: 'Non-Playable'
                })),
                size(3, bytes('Unused')),
                int32('Value'),
                uint8('Clip Rounds')
            ]))),
            subrecord('DAT2', struct('Data 2', [
                uint32('Proj. per Shot'),
                ckFormId('Projectile', ['PROJ', 'NULL']),
                float('Weight'),
                ckFormId('Consumed Ammo', [
                    'AMMO', 'MISC', 'NULL'
                ]),
                float('Consumed Percentage')
            ])),
            opts(subrecord('ONAM', conflictType('Translate', string('Short Name'))), {
                "transform": "keepcase"
            }),
            opts(subrecord('QNAM', conflictType('Translate', string('Abbrev.'))), {
                "transform": "keepcase"
            }),
            memberArray('Ammo Effects', 
                subrecord('RCIL', ckFormId('Effect', ['AMEF']))
            )
        ]
    })
};