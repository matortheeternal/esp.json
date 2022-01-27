let {
    addDef, float, struct
} = require('../helpers');

module.exports = () => {
    addDef('TimeInterpolator', 
        struct('Data', [
            float('Time'),
            float('Value')
        ])
    );
};