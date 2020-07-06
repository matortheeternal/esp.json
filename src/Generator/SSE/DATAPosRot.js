let {
    addDef, float, struct, req, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('DATAPosRot', 
        req(subrecord('DATA', struct('Position/Rotation', [
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
        ])))
    );
};