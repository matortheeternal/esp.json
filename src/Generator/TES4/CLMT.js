let {
    def, ckFormId, int32, sortKey, struct, 
    sorted, array, subrecord, string, uint8, 
    format, req, record
} = require('../helpers');

module.exports = () => {
    record('CLMT', 'Climate', {
        members: [
            def('EDID'),
            subrecord('WLST', sorted(array('Weather Types', 
                sortKey([0], struct('Weather Type', [
                    ckFormId('Weather', ['WTHR']),
                    int32('Chance')
                ]))
            ))),
            subrecord('FNAM', string('Sun Texture')),
            subrecord('GNAM', string('Sun Glare Texture')),
            def('MODL'),
            req(subrecord('TNAM', struct('Timing', [
                struct('Sunrise', [
                    format(uint8('Begin'), def('ClmtTime')),
                    format(uint8('End'), def('ClmtTime'))
                ]),
                struct('Sunset', [
                    format(uint8('Begin'), def('ClmtTime')),
                    format(uint8('End'), def('ClmtTime'))
                ]),
                uint8('Volatility'),
                format(uint8('Moons / Phase Length'), def('ClmtMoonsPhaseLength'))
            ])))
        ]
    })
};