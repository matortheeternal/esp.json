let {
    flags, def, req, string, subrecord, 
    bytes, size, conflictType, memberStruct, ckFormId, 
    uint16, memberArray, int32, float, uint32, 
    struct, uint8, format, unknown, sortKey, 
    sorted, array, record
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
            def('PTRN'),
            def('FULL'),
            def('EITM'),
            memberStruct('Male world model', [
                subrecord('MOD2', string('Model FileName')),
                subrecord('MO2T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MODC'),
                def('MO2S')
            ]),
            subrecord('ICON', string('Male Inventory Image')),
            subrecord('MICO', string('Male Message Icon')),
            memberStruct('Female world model', [
                subrecord('MOD4', string('Model FileName')),
                subrecord('MO4T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MODC'),
                def('MO4S')
            ]),
            subrecord('ICO2', string('Female Inventory Image')),
            subrecord('MIC2', string('Female Message Icon')),
            def('BOD2'),
            def('DEST'),
            def('YNAM'),
            def('ZNAM'),
            def('ETYP'),
            subrecord('BIDS', ckFormId('Block Bash Impact Data Set', ['IPDS', 'NULL'])),
            subrecord('BAMT', ckFormId('Alternate Block Material', ['MATT', 'NULL'])),
            subrecord('RNAM', ckFormId('Race', ['RACE'])),
            def('KSIZ'),
            def('KWDAs'),
            def('DESC'),
            def('INRD'),
            memberArray('Models', 
                memberStruct('Model', [
                    subrecord('INDX', uint16('Addon Index')),
                    subrecord('MODL', ckFormId('Armor Addon', ['ARMA']))
                ])
            ),
            req(subrecord('DATA', struct('', [
                int32('Value'),
                float('Weight'),
                uint32('Health')
            ]))),
            subrecord('FNAM', struct('', [
                uint16('Armor Rating'),
                uint16('Base Addon Index'),
                format(uint8('Stagger Rating'), def('StaggerEnum')),
                conflictType('Ignore', unknown())
            ])),
            subrecord('DAMA', sorted(array('Resistances', 
                sortKey([0], struct('Resistance', [
                    ckFormId('Damage Type', ['DMGT']),
                    uint32('Value')
                ]))
            ))),
            subrecord('TNAM', ckFormId('Template Armor', ['ARMO'])),
            def('APPR'),
            def('ObjectTemplate')
        ]
    })
};