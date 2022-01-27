let {
    addDef, float, scale, struct
} = require('../helpers');

module.exports = () => {
    addDef('ColorInterpolator', 
        struct('Data', [
            float('Time'),
            scale(255, float('Red')),
            scale(255, float('Green')),
            scale(255, float('Blue')),
            scale(255, float('Alpha'))
        ])
    );
};