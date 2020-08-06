let {
    flags, def, ckFormId, float, struct, 
    subrecord, memberArray, opts, record
} = require('../helpers');

module.exports = () => {
    record('SHOU', 'Shout', {
        flags: flags({
            7: 'Treat spells as powers',
            12: 'Ignored'
        }),
        members: [
            def('EDID'),
            def('FULL'),
            def('MDOB'),
            def('DESC'),
            opts(memberArray('Words of Power', 
                subrecord('SNAM', struct('', [
                    ckFormId('Word', ['WOOP', 'NULL']),
                    ckFormId('Spell', ['SPEL', 'NULL']),
                    float('Recovery Time')
                ]))
            ), {
                "notAlignable": 1
            })
        ]
    })
};