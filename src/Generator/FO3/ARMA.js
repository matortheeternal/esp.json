let {
    req, def, string, subrecord, bytes, 
    size, conflictType, memberStruct, unordered, int32, 
    float, struct, div, int16, format, 
    flags, uint16, record
} = require('../helpers');

module.exports = () => {
    record('ARMA', 'Armor Addon', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('FULL'),
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
            req(def('ETYP')),
            req(subrecord('DATA', struct('Data', [
                int32('Value'),
                int32('Max Condition'),
                float('Weight')
            ]))),
            req(subrecord('DNAM', struct('', [
                format(int16('AR'), div(100)),
                format(uint16('Flags'), flags({
                    0: 'Modulates Voice'
                }))
            ])))
        ]
    })
};