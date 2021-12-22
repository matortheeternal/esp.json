let {
    flags, def, req, uint16, subrecord, 
    string, bytes, size, conflictType, memberStruct, 
    ckFormId, memberArray, int32, float, struct, 
    div, format, record
} = require('../helpers');

module.exports = () => {
    record('ARMO', 'Armor', {
        flags: flags({
            2: 'Non-Playable',
            6: 'Shield',
            10: 'Unknown 10',
            12: 'Ignored',
            15: 'Unknown 15'
        }),
        members: [
            def('EDID'),
            def('VMAD'),
            req(def('OBND')),
            def('FULL'),
            def('EITM'),
            subrecord('EAMT', uint16('Enchantment Amount')),
            memberStruct('Male world model', [
                subrecord('MOD2', string('Model FileName')),
                subrecord('MO2T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO2S')
            ]),
            def('ICON'),
            memberStruct('Female world model', [
                subrecord('MOD4', string('Model FileName')),
                subrecord('MO4T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO4S')
            ]),
            def('ICO2'),
            def('BODTBOD2'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            subrecord('BMCT', string('Ragdoll Constraint Template')),
            def('ETYP'),
            subrecord('BIDS', ckFormId('Bash Impact Data Set', ['IPDS'])),
            subrecord('BAMT', ckFormId('Alternate Block Material', ['MATT'])),
            subrecord('RNAM', ckFormId('Race', ['RACE'])),
            def('KSIZ'),
            def('KWDAs'),
            def('DESC'),
            memberArray('Armature', 
                subrecord('MODL', ckFormId('Model FileName', ['ARMA', 'NULL']))
            ),
            req(subrecord('DATA', struct('Data', [
                int32('Value'),
                float('Weight')
            ]))),
            req(subrecord('DNAM', format(int32('Armor Rating'), div(100)))),
            subrecord('TNAM', ckFormId('Template Armor', ['ARMO']))
        ]
    })
};