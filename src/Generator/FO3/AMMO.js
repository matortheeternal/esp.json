let {
    req, def, float, flags, uint8, 
    format, bytes, size, int32, struct, 
    subrecord, string, conflictType, opts, record
} = require('../helpers');

module.exports = () => {
    record('AMMO', 'Ammunition', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(def('FULL')),
            def('MODL'),
            def('ICON'),
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
            opts(subrecord('ONAM', conflictType('Translate', string('Short Name'))), {
                "transform": "keepcase"
            })
        ]
    })
};