let {
    addDef, struct, float, req, scale
} = require('../../helpers');

module.exports = () => {
    addDef('FloatColors',
        struct('', [
            req(scale(255, float('Red'))),
            req(scale(255, float('Green'))),
            req(scale(255, float('Blue')))
        ])
    );
};
