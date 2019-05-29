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
                req(float('X')),
                req(float('Y')),
                req(float('Z'))
            ])
        ])))
    );
};