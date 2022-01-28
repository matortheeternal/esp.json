let {
    def, uint16, subrecord, ckFormId, float, 
    struct, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('SCSN', 'Audio Category Snapshot', {
        members: [
            def('EDID'),
            subrecord('PNAM', uint16('Priority')),
            memberArray('Category Multipliers', 
                subrecord('CNAM', struct('Category Multiplier', [
                    ckFormId('Categoty', ['SNCT']),
                    float('Multiplier')
                ]))
            )
        ]
    })
};