let {
    flags, def, string, subrecord, uint32, 
    format, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('KYWD', 'Keyword', {
        flags: flags({
            12: 'Ignored',
            15: 'Restricted'
        }),
        members: [
            def('EDID'),
            def('CNAM'),
            subrecord('DNAM', string('Notes')),
            subrecord('TNAM', format(uint32('Type'), def('KeywordTypeEnum'))),
            subrecord('DATA', ckFormId('Attraction Rule', ['AORU'])),
            def('FULL'),
            subrecord('NNAM', string('Display Name'))
        ]
    })
};