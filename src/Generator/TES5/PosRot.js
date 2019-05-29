let {
    addDef, float, struct, req
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
                req(float('X')),
                req(float('Y')),
                req(float('Z'))
            ])
        ])
    );
};