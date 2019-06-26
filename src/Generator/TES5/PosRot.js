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
                req(req(float('X'))),
                req(req(float('Y'))),
                req(req(float('Z')))
            ])
        ])
    );
};