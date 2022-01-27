let {
    req, def, string, subrecord, bytes, 
    size, conflictType, memberStruct, unordered, int32, 
    float, struct, div, int16, format, 
    flags, uint16, enumeration, uint32, ckFormId, 
    uint8, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('ARMO', 'Armor', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
            def('SCRI'),
            def('EITM'),
            def('BMDT'),
            unordered(memberStruct('Male biped model', [
                req(subrecord('MODL', string('Model FileName'))),
                subrecord('MODT', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MODS'),
                def('MODD')
            ])),
            memberStruct('Male world model', [
                subrecord('MOD2', string('Model FileName')),
                subrecord('MO2T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO2S')
            ]),
            subrecord('ICON', string('Male icon FileName')),
            subrecord('MICO', string('Male mico FileName')),
            unordered(memberStruct('Female biped model', [
                req(subrecord('MOD3', string('Model FileName'))),
                subrecord('MO3T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO3S'),
                def('MOSD')
            ])),
            memberStruct('Female world model', [
                subrecord('MOD4', string('Model FileName')),
                subrecord('MO4T', conflictType('Ignore', size(0, bytes('Texture Files Hashes')))),
                def('MO4S')
            ]),
            subrecord('ICO2', string('Female icon FileName')),
            subrecord('MIC2', string('Female mico FileName')),
            subrecord('BMCT', string('Ragdoll Constraint Template')),
            def('DEST'),
            def('REPL'),
            def('BIPL'),
            req(def('ETYP')),
            def('YNAM'),
            def('ZNAM'),
            req(subrecord('DATA', struct('Data', [
                int32('Value'),
                int32('Health'),
                float('Weight')
            ]))),
            req(subrecord('DNAM', struct('', [
                format(int16('AR'), div(100)),
                size(2, bytes('Unused')),
                float('DT'),
                format(uint16('Flags'), flags({
                    0: 'Modulates Voice'
                })),
                size(2, bytes('Unused'))
            ]))),
            subrecord('BNAM', format(uint32('Overrides Animation Sounds'), enumeration({
                0: 'No',
                1: 'Yes'
            }))),
            memberArray('Animation Sounds', 
                subrecord('SNAM', struct('Animation Sound', [
                    ckFormId('Sound', ['SOUN']),
                    uint8('Chance'),
                    size(3, bytes('Unused')),
                    format(uint32('Type'), enumeration({
                        17: 'Walk',
                        18: 'Sneak',
                        19: 'Run',
                        20: 'Sneak (Armor)',
                        21: 'Run (Armor)',
                        22: 'Walk (Armor)'
                    }))
                ]))
            ),
            subrecord('TNAM', ckFormId('Animation Sounds Template', ['ARMO']))
        ]
    })
};