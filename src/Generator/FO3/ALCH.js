let {
    req, def, float, subrecord, int32, 
    flags, uint8, format, bytes, size, 
    ckFormId, struct, record
} = require('../helpers');

module.exports = () => {
    record('ALCH', 'Ingestible', {
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
            req(def('ETYP')),
            req(subrecord('DATA', float('Weight'))),
            req(subrecord('ENIT', struct('Effect Data', [
                int32('Value'),
                format(uint8('Flags?'), flags({
                    0: 'No Auto-Calc (Unused)',
                    1: 'Food Item',
                    2: 'Medicine'
                })),
                size(3, bytes('Unused')),
                ckFormId('Withdrawal Effect', ['SPEL', 'NULL']),
                float('Addiction Chance'),
                ckFormId('Sound - Consume', ['SOUN'])
            ]))),
            req(def('Effects'))
        ]
    })
};