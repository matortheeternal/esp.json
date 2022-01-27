let {
    req, def, enumeration, uint32, format, 
    float, struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('AMEF', 'Ammo Effect', {
        members: [
            req(def('EDID')),
            def('FULL'),
            subrecord('DATA', struct('Data', [
                format(uint32('Type'), enumeration({
                    0: 'Damage Mod',
                    1: 'DR Mod',
                    2: 'DT Mod',
                    3: 'Spread Mod',
                    4: 'Weapon Condition Mod',
                    5: 'Fatigue Mod'
                })),
                format(uint32('Operation'), enumeration({
                    0: 'Add',
                    1: 'Multiply',
                    2: 'Subtract'
                })),
                float('Value')
            ]))
        ]
    })
};