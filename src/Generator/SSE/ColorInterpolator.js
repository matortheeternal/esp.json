let {
    addDef, float, scale, sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('ColorInterpolator', 
        sortKey([0], struct('Data', [
            float('Time'),
            scale(255, float('Red')),
            scale(255, float('Green')),
            scale(255, float('Blue')),
            scale(255, float('Alpha'))
        ]))
    );
};