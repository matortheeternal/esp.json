let {
    def, req, subrecord, ckFormId, float, 
    int16, struct, cstring, record
} = require('../helpers');

module.exports = () => {
    record('LSCR', 'Load Screen', {
        flags: {
            10: 'Displays In Main Menu'
        },
        members: [
            def('EDID'),
            def('ICON'),
            req(def('DESC')),
            def('CTDAs'),
            req(subrecord('NNAM', ckFormId('Loading Screen NIF', ['STAT', 'NULL']))),
            subrecord('SNAM', float('Initial Scale')),
            subrecord('RNAM', struct('Initial Rotation', [
                int16('X'),
                int16('Y'),
                int16('Z')
            ])),
            subrecord('ONAM', struct('Rotation Offset Constraints', [
                int16('Min'),
                int16('Max')
            ])),
            subrecord('XNAM', struct('Initial Translation Offset', [
                float('X'),
                float('Y'),
                float('Z')
            ])),
            req(subrecord('MOD2', cstring('Camera Path')))
        ]
    })
};