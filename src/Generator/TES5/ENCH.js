let {
    def, int32, uint32, float, ckFormId, 
    subrecord, struct, req, record
} = require('../helpers');

module.exports = () => {
    record('ENCH', 'Object Effect', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('FULL'),
            req(subrecord('ENIT', struct('Effect Data', [
                int32('Enchantment Cost'),
                uint32('Flags', {
                    "0": "No Auto-Calc",
                    "1": "",
                    "2": "Extend Duration On Recast"
                }),
                uint32('Cast Type', def('CastEnum')),
                int32('Enchantment Amount'),
                uint32('Target Type', def('TargetEnum')),
                uint32('Enchant Type', {
                    "6": "Enchantment",
                    "12": "Staff Enchantment"
                }),
                float('Charge Time'),
                ckFormId('Base Enchantment', ['ENCH', 'NULL']),
                ckFormId('Worn Restrictions', ['FLST', 'NULL'])
            ]))),
            def('EffectsReq')
        ]
    })
};