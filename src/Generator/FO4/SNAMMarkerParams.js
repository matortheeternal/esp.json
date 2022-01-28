let {
    addDef, float, def, format, req, 
    ckFormId, flags, uint8, bytes, size, 
    struct, array, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SNAMMarkerParams', 
        subrecord('SNAM', array('Marker Parameters', 
            struct('Marker', [
                float('Offset X'),
                float('Offset Y'),
                float('Offset Z'),
                req(format(float('Rotation Z'), def('RotationFactor'))),
                ckFormId('Keyword', ['KYWD', 'NULL']),
                format(uint8('Entry Types'), flags({
                    0: 'Front',
                    1: 'Rear',
                    2: 'Right',
                    3: 'Left',
                    4: 'Other',
                    5: 'Unused 5',
                    6: 'Unused 6',
                    7: 'Unused 7'
                })),
                size(3, bytes('Unknown'))
            ])
        ))
    );
};