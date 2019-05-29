let {
    def, req, int32, uint32, format, 
    float, ckFormId, subrecord, struct, record
} = require('../helpers');

module.exports = () => {
    record('ENCH', 'Object Effect', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            req(subrecord('ENIT', struct('Effect Data', [
                int32('Enchantment Cost'),
                format(uint32('Flags'), {
                    0: 'No Auto-Calc',
                    1: '',
                    2: 'Extend Duration On Recast'
                }),
                format(uint32('Cast Type'), def('CastEnum')),
                int32('Enchantment Amount'),
                format(uint32('Target Type'), def('TargetEnum')),
                format(uint32('Enchant Type'), {
                    6: 'Enchantment',
                    12: 'Staff Enchantment'
                }),
                float('Charge Time'),
                ckFormId('Base Enchantment', ['ENCH', 'NULL']),
                ckFormId('Worn Restrictions', ['FLST', 'NULL'])
            ]))),
            req(def('Effects'))
        ]
    })
};