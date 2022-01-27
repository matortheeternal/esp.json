let {
    req, def, flags, uint8, format, 
    subrecord, ckFormId, sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('HDPT', 'Head Part', {
        members: [
            req(def('EDID')),
            req(def('FULL')),
            def('MODL'),
            req(subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Playable'
            })))),
            sorted(memberArray('Extra Parts', 
                subrecord('HNAM', ckFormId('Part', ['HDPT']))
            ))
        ]
    })
};