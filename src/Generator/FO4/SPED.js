let {
    addDef, float, def, format, req, 
    struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SPED', 
        req(subrecord('SPED', struct('Movement Data', [
            float('Unknown'),
            float('Walk - Left'),
            float('Run - Left'),
            float('Unknown'),
            float('Unknown'),
            float('Walk - Right'),
            float('Run - Right'),
            float('Unknown'),
            float('Unknown'),
            float('Walk - Forward'),
            float('Run - Forward'),
            float('Sprint - Forward'),
            float('Unknown'),
            float('Walk - Back'),
            float('Run - Back'),
            float('Unknown'),
            req(format(float('Standing - Pitch'), def('RotationFactor'))),
            req(format(float('Walk - Pitch'), def('RotationFactor'))),
            req(format(float('Run - Pitch'), def('RotationFactor'))),
            req(format(float('Sprint - Pitch'), def('RotationFactor'))),
            float('Unknown'),
            float('Unknown'),
            float('Unknown'),
            float('Unknown'),
            req(format(float('Standing - Yaw'), def('RotationFactor'))),
            req(format(float('Walk - Yaw'), def('RotationFactor'))),
            req(format(float('Run - Yaw'), def('RotationFactor'))),
            req(format(float('Sprint - Yaw'), def('RotationFactor')))
        ])))
    );
};