let {
    addDef, record, def, req, uint16, 
    multiStruct, subrecord, zstring, bytes, ckFormId, 
    struct, int32, float
} = require('../helpers');

module.exports = game => {
    addDef(record('ARMO', 'Armor', {
        flags: {
            2: 'Non-Playable',                              // 0x00000004
            6: 'Shield',                                    // 0x00000040
            10: 'Unknown 10',                               // 0x00000400
            15: 'Unknown 15',                               // 0x00008000
        },
        elements: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('EITM'),
            subrecord('EAMT', uint16('Enchantment Amount')),
            multiStruct('Male world model', [
                subrecord('MOD2', zstring('Model Filename')),
                subrecord('MO2T', bytes('Texture Files Hashes')),
                def('MO2S'),
            ]),
            def('ICON'),
            multiStruct('Female world model', [
                subrecord('MOD4', zstring('Model Filename')),
                subrecord('MO4T', bytes('Texture Files Hashes')),
                def('MO4S'),
            ]),
            def('ICO2'),
            def('BODTBOD2'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            subrecord('BMCT', zstring('Ragdoll Constraint Template')),
            def('ETYP'),
            subrecord('BIDS', ckFormId('Bash Impact Data Set', ['IPDS'])),
            subrecord('BAMT', ckFormId('Alternate Block Material', ['MATT'])),
            subrecord('RNAM', ckFormId('Race', ['RACE'])),
            def('KSIZ'),
            def('KWDAs'),
            def('DESC'),
            arrayOfStruct('Armature',
                subrecord('MODL', ckFormId('Model Filename', ['ARMA', 'NULL'])),
            ),
            req(subrecord('DATA', struct('Data', [
                int32('Value'),
                float('Weight'),
            ]))),
            subrecord('DNAM', int32('Armor Rating')),
            subrecord('TNAM', ckFormId('Template Armor', ['ARMO'])),
        ]
    }));
};