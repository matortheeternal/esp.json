let {
    def, string, subrecord, flags, uint8, 
    format, bytes, size, uint32, struct, 
    float, req, record
} = require('../helpers');

module.exports = () => {
    record('EFSH', 'Effect Shader', {
        members: [
            def('EDID'),
            subrecord('ICON', string('Fill Texture')),
            subrecord('ICO2', string('Particle Shader Texture')),
            req(subrecord('DATA', struct('', [
                format(uint8('Flags'), flags({
                    0: 'No Membrane Shader',
                    1: '',
                    2: '',
                    3: 'No Particle Shader',
                    4: 'Edge Effect - Inverse',
                    5: 'Membrane Shader - Affect Skin Only'
                })),
                size(3, bytes('Unused')),
                format(uint32('Membrane Shader - Source Blend Mode'), def('BlendModeEnum')),
                format(uint32('Membrane Shader - Blend Operation'), def('BlendOpEnum')),
                format(uint32('Membrane Shader - Z Test Function'), def('ZTestFuncEnum')),
                struct('Fill/Texture Effect - Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                float('Fill/Texture Effect - Alpha Fade In Time'),
                float('Fill/Texture Effect - Full Alpha Time'),
                float('Fill/Texture Effect - Alpha Fade Out Time'),
                float('Fill/Texture Effect - Presistent Alpha Ratio'),
                float('Fill/Texture Effect - Alpha Pulse Amplitude'),
                float('Fill/Texture Effect - Alpha Pulse Frequency'),
                float('Fill/Texture Effect - Texture Animation Speed (U)'),
                float('Fill/Texture Effect - Texture Animation Speed (V)'),
                float('Edge Effect - Fall Off'),
                struct('Edge Effect - Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                float('Edge Effect - Alpha Fade In Time'),
                float('Edge Effect - Full Alpha Time'),
                float('Edge Effect - Alpha Fade Out Time'),
                float('Edge Effect - Persistent Alpha Ratio'),
                float('Edge Effect - Alpha Pulse Amplitude'),
                float('Edge Effect - Alpha Pusle Frequence'),
                float('Fill/Texture Effect - Full Alpha Ratio'),
                float('Edge Effect - Full Alpha Ratio'),
                format(uint32('Membrane Shader - Dest Blend Mode'), def('BlendModeEnum')),
                format(uint32('Particle Shader - Source Blend Mode'), def('BlendModeEnum')),
                format(uint32('Particle Shader - Blend Operation'), def('BlendOpEnum')),
                format(uint32('Particle Shader - Z Test Function'), def('ZTestFuncEnum')),
                format(uint32('Particle Shader - Dest Blend Mode'), def('BlendModeEnum')),
                float('Particle Shader - Particle Birth Ramp Up Time'),
                float('Particle Shader - Full Particle Birth Time'),
                float('Particle Shader - Particle Birth Ramp Down Time'),
                float('Particle Shader - Full Particle Birth Ratio'),
                float('Particle Shader - Persistant Particle Birth Ratio'),
                float('Particle Shader - Particle Lifetime'),
                float('Particle Shader - Particle Lifetime +/-'),
                float('Particle Shader - Initial Speed Along Normal'),
                float('Particle Shader - Acceleration Along Normal'),
                float('Particle Shader - Initial Velocity #1'),
                float('Particle Shader - Initial Velocity #2'),
                float('Particle Shader - Initial Velocity #3'),
                float('Particle Shader - Acceleration #1'),
                float('Particle Shader - Acceleration #2'),
                float('Particle Shader - Acceleration #3'),
                float('Particle Shader - Scale Key 1'),
                float('Particle Shader - Scale Key 2'),
                float('Particle Shader - Scale Key 1 Time'),
                float('Particle Shader - Scale Key 2 Time'),
                struct('Color Key 1 - Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                struct('Color Key 2 - Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                struct('Color Key 3 - Color', [
                    uint8('Red'),
                    uint8('Green'),
                    uint8('Blue'),
                    size(1, bytes('Unused'))
                ]),
                float('Color Key 1 - Color Alpha'),
                float('Color Key 2 - Color Alpha'),
                float('Color Key 3 - Color Alpha'),
                float('Color Key 1 - Color Key Time'),
                float('Color Key 2 - Color Key Time'),
                float('Color Key 3 - Color Key Time')
            ])))
        ]
    })
};