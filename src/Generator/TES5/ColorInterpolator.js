let {
    addDef, float, req, sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('ColorInterpolator', 
        sortKey([0], struct('Data', [
            float('Time'),
            req(float('Red')),
            req(float('Green')),
            req(float('Blue')),
            req(float('Alpha'))
        ]))
    );
};