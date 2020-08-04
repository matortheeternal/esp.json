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
                req(req(format(float('X'), 'RotationFactor'))),
                req(req(format(float('Y'), 'RotationFactor'))),
                req(req(format(float('Z'), 'RotationFactor')))
            ])
        ])
    );
};