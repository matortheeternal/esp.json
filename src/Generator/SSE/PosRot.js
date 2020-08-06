let {
    addDef, float, struct, format, req
} = require('../helpers');

module.exports = () => {
    addDef('PosRot', 
        struct('Position/Rotation', [
            struct('Position', [
                float('X'),
                float('Y'),
                float('Z')
            ]),
            struct('Rotation', [
                req(format(float('X'), 'RotationFactor')),
                req(format(float('Y'), 'RotationFactor')),
                req(format(float('Z'), 'RotationFactor'))
            ])
        ])
    );
};