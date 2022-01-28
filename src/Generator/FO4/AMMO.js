let {
    flags, def, req, uint32, float, 
    struct, subrecord, ckFormId, uint8, format, 
    bytes, size, localized, string, conflictType, 
    opts, record
} = require('../helpers');

module.exports = () => {
    record('AMMO', 'Ammunition', {
        flags: flags({
            2: 'Non-Playable',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            req(def('OBND')),
            def('PTRN'),
            def('FULL'),
            def('MODL'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('DESC'),
            def('KSIZ'),
            def('KWDAs'),
            req(subrecord('DATA', struct('Data', [
                uint32('Value'),
                float('Weight')
            ]))),
            req(subrecord('DNAM', struct('', [
                ckFormId('Projectile', ['PROJ', 'NULL']),
                format(uint8('Flags'), flags({
                    0: 'Ignores Normal Weapon Resistance',
                    1: 'Non-Playable',
                    2: 'Has Count Based 3D'
                })),
                size(3, bytes('Unused')),
                float('Damage'),
                uint32('Health')
            ]))),
            opts(subrecord('ONAM', conflictType('Translate', localized(string('Short Name')))), {
                "keepCase": true
            }),
            subrecord('NAM1', string('Casing Model')),
            subrecord('NAM2', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
        ]
    })
};