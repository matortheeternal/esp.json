let {
    addDef, float, sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('TimeInterpolator', 
        sortKey([0], struct('Data', [
            float('Time'),
            float('Value')
        ]))
    );
};