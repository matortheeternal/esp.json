let {
    addDef, float, req, sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('ColorInterpolator', 
        sortKey([0], struct('Data', [
            float('Time'),
            req(req(float('Red'))),
            req(req(float('Green'))),
            req(req(float('Blue'))),
            req(req(float('Alpha')))
        ]))
    );
};