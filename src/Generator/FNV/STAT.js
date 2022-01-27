let {
    req, def, enumeration, int8, format, 
    subrecord, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('STAT', 'Static', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            def('MODL'),
            subrecord('BRUS', format(int8('Passthrough Sound'), enumeration({
                0: 'BushA',
                1: 'BushB',
                2: 'BushC',
                3: 'BushD',
                4: 'BushE',
                5: 'BushF',
                6: 'BushG',
                7: 'BushH',
                8: 'BushI',
                9: 'BushJ',
                "-1": 'NONE'
            }))),
            subrecord('RNAM', ckFormId('Sound - Looping/Random', ['SOUN']))
        ]
    })
};