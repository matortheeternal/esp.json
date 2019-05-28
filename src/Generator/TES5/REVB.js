let {
    def, uint16, int8, div, uint8, 
    subrecord, struct, req, record
} = require('../helpers');

module.exports = () => {
    record('REVB', 'Reverb Parameters', {
        members: [
            def('EDID'),
            req(subrecord('DATA', struct('Data', [
                uint16('Decay Time (ms)'),
                uint16('HF Reference (Hz)'),
                int8('Room Filter'),
                int8('Room HF Filter'),
                int8('Reflections'),
                int8('Reverb Amp'),
                uint8('Decay HF Ratio', div(100)),
                uint8('Reflect Delay (ms), scaled'),
                uint8('Reverb Delay (ms)'),
                uint8('Diffusion %'),
                uint8('Density %'),
                uint8('Unknown')
            ])))
        ]
    })
};