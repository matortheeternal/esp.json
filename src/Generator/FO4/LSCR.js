let {
    flags, def, req, ckFormId, subrecord, 
    int16, struct, float, string, record
} = require('../helpers');

module.exports = () => {
    record('LSCR', 'Load Screen', {
        flags: flags({
            10: 'Displays In Main Menu',
            12: 'Ignored',
            15: 'No Rotation'
        }),
        members: [
            def('EDID'),
            req(def('DESC')),
            def('CTDAs'),
            req(subrecord('NNAM', ckFormId('Loading Screen NIF', [
                'STAT', 'SCOL', 'NULL'
            ]))),
            subrecord('TNAM', ckFormId('Transform', ['TRNS'])),
            subrecord('ONAM', struct('Rotation', [
                int16('Min'),
                int16('Max')
            ])),
            subrecord('ZNAM', struct('Zoom', [
                float('Min'),
                float('Max')
            ])),
            subrecord('MOD2', string('Camera Path'))
        ]
    })
};