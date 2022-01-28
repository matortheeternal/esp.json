let {
    def, ckFormId, subrecord, float, memberArray, 
    uint32, format, sortKey, struct, sorted, 
    record
} = require('../helpers');

module.exports = () => {
    record('KSSM', 'Sound Keyword Mapping', {
        members: [
            def('EDID'),
            subrecord('DNAM', ckFormId('Primary Descriptor', ['SNDR'])),
            subrecord('ENAM', ckFormId('Exterior Tail', ['SNDR'])),
            subrecord('VNAM', ckFormId('VATS Descriptor', ['SNDR'])),
            subrecord('TNAM', float('VATS Threshold')),
            memberArray('Keywords', 
                subrecord('KNAM', ckFormId('Keyword', ['KYWD']))
            ),
            sorted(memberArray('Sounds', 
                subrecord('RNAM', sortKey([0], struct('Sound', [
                    format(uint32('Reverb Class'), def('ReverbClassEnum')),
                    ckFormId('Descriptor', ['SNDR'])
                ])))
            ))
        ]
    })
};