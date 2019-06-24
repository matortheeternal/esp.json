let {
    def, flags, uint32, format, float, 
    struct, subrecord, array, multiStruct, unknown, 
    record
} = require('../helpers');

module.exports = () => {
    record('IMAD', 'Image Space Adapter', {
        members: [
            def('EDID'),
            subrecord('DNAM', struct('Data Count', [
                format(uint32('Flags'), flags({
                    0: 'Animatable'
                })),
                float('Duration'),
                struct('HDR', [
                    uint32('Eye Adapt Speed Mult'),
                    uint32('Eye Adapt Speed Add'),
                    uint32('Bloom Blur Radius Mult'),
                    uint32('Bloom Blur Radius Add'),
                    uint32('Bloom Threshold Mult'),
                    uint32('Bloom Threshold Add'),
                    uint32('Bloom Scale Mult'),
                    uint32('Bloom Scale Add'),
                    uint32('Target Lum Min Mult'),
                    uint32('Target Lum Min Add'),
                    uint32('Target Lum Max Mult'),
                    uint32('Target Lum Max Add'),
                    uint32('Sunlight Scale Mult'),
                    uint32('Sunlight Scale Add'),
                    uint32('Sky Scale Mult'),
                    uint32('Sky Scale Add')
                ]),
                uint32('Unknown08 Mult'),
                uint32('Unknown48 Add'),
                uint32('Unknown09 Mult'),
                uint32('Unknown49 Add'),
                uint32('Unknown0A Mult'),
                uint32('Unknown4A Add'),
                uint32('Unknown0B Mult'),
                uint32('Unknown4B Add'),
                uint32('Unknown0C Mult'),
                uint32('Unknown4C Add'),
                uint32('Unknown0D Mult'),
                uint32('Unknown4D Add'),
                uint32('Unknown0E Mult'),
                uint32('Unknown4E Add'),
                uint32('Unknown0F Mult'),
                uint32('Unknown4F Add'),
                uint32('Unknown10 Mult'),
                uint32('Unknown50 Add'),
                struct('Cinematic', [
                    uint32('Saturation Mult'),
                    uint32('Saturation Add'),
                    uint32('Brightness Mult'),
                    uint32('Brightness Add'),
                    uint32('Contrast Mult'),
                    uint32('Contrast Add')
                ]),
                uint32('Unknown14 Mult'),
                uint32('Unknown54 Add'),
                uint32('Tint Color'),
                uint32('Blur Radius'),
                uint32('Double Vision Strength'),
                uint32('Radial Blur Strength'),
                uint32('Radial Blur Ramp Up'),
                uint32('Radial Blur Start'),
                format(uint32('Radial Blur Flags'), flags({
                    0: 'Use Target'
                })),
                float('Radial Blur Center X'),
                float('Radial Blur Center Y'),
                uint32('DoF Strength'),
                uint32('DoF Distance'),
                uint32('DoF Range'),
                format(uint32('DoF Flags'), flags({
                    0: 'Use Target',
                    1: 'Unknown 2',
                    2: 'Unknown 3',
                    3: 'Unknown 4',
                    4: 'Unknown 5',
                    5: 'Unknown 6',
                    6: 'Unknown 7',
                    7: 'Unknown 8',
                    8: 'Mode - Front',
                    9: 'Mode - Back',
                    10: 'No Sky',
                    11: 'Blur Radius Bit 2',
                    12: 'Blur Radius Bit 1',
                    13: 'Blur Radius Bit 0'
                })),
                uint32('Radial Blur Ramp Down'),
                uint32('Radial Blur Down Start'),
                uint32('Fade Color'),
                uint32('Motion Blur Strength')
            ])),
            subrecord('BNAM', array('Blur Radius', 
                def('TimeInterpolator')
            )),
            subrecord('VNAM', array('Double Vision Strength', 
                def('TimeInterpolator')
            )),
            subrecord('TNAM', array('Tint Color', 
                def('ColorInterpolator')
            )),
            subrecord('NAM3', array('Fade Color', 
                def('ColorInterpolator')
            )),
            subrecord('RNAM', array('Radial Blur Strength', 
                def('TimeInterpolator')
            )),
            subrecord('SNAM', array('Radial Blur Ramp Up', 
                def('TimeInterpolator')
            )),
            subrecord('UNAM', array('Radial Blur Start', 
                def('TimeInterpolator')
            )),
            subrecord('NAM1', array('Radial Blur Ramp Down', 
                def('TimeInterpolator')
            )),
            subrecord('NAM2', array('Radial Blur Down Start', 
                def('TimeInterpolator')
            )),
            subrecord('WNAM', array('DoF Strength', 
                def('TimeInterpolator')
            )),
            subrecord('XNAM', array('DoF Distance', 
                def('TimeInterpolator')
            )),
            subrecord('YNAM', array('DoF Range', 
                def('TimeInterpolator')
            )),
            subrecord('NAM4', array('Motion Blur Strength', 
                def('TimeInterpolator')
            )),
            multiStruct('HDR', [
                subrecord('\x00IAD', array('Eye Adapt Speed Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x40IAD', array('Eye Adapt Speed Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x01IAD', array('Bloom Blur Radius Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x41IAD', array('Bloom Blur Radius Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x02IAD', array('Bloom Threshold Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x42IAD', array('Bloom Threshold Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x03IAD', array('Bloom Scale Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x43IAD', array('Bloom Scale Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x04IAD', array('Target Lum Min Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x44IAD', array('Target Lum Min Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x05IAD', array('Target Lum Max Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x45IAD', array('Target Lum Max Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x06IAD', array('Sunlight Scale Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x46IAD', array('Sunlight Scale Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x07IAD', array('Sky Scale Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x47IAD', array('Sky Scale Add', 
                    def('TimeInterpolator')
                ))
            ]),
            subrecord('\x08IAD', unknown()),
            subrecord('\x48IAD', unknown()),
            subrecord('\x09IAD', unknown()),
            subrecord('\x49IAD', unknown()),
            subrecord('\x0AIAD', unknown()),
            subrecord('\x4AIAD', unknown()),
            subrecord('\x0BIAD', unknown()),
            subrecord('\x4BIAD', unknown()),
            subrecord('\x0CIAD', unknown()),
            subrecord('\x4CIAD', unknown()),
            subrecord('\x0DIAD', unknown()),
            subrecord('\x4DIAD', unknown()),
            subrecord('\x0EIAD', unknown()),
            subrecord('\x4EIAD', unknown()),
            subrecord('\x0FIAD', unknown()),
            subrecord('\x4FIAD', unknown()),
            subrecord('\x10IAD', unknown()),
            subrecord('\x50IAD', unknown()),
            multiStruct('Cinematic', [
                subrecord('\x11IAD', array('Saturation Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x51IAD', array('Saturation Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x12IAD', array('Brightness Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x52IAD', array('Brightness Add', 
                    def('TimeInterpolator')
                )),
                subrecord('\x13IAD', array('Contrast Mult', 
                    def('TimeInterpolator')
                )),
                subrecord('\x53IAD', array('Contrast Add', 
                    def('TimeInterpolator')
                ))
            ]),
            subrecord('\x14IAD', unknown()),
            subrecord('\x54IAD', unknown())
        ]
    })
};