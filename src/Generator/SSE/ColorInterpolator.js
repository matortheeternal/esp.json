let {
    addDef, float, scale, req, sortKey, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('ColorInterpolator', 
        sortKey([0], struct('Data', [
            float('Time'),
            req(req(scale(255, float('Red')))),
            req(req(scale(255, float('Green')))),
            req(req(scale(255, float('Blue')))),
            req(req(scale(255, float('Alpha'))))
        ]))
    );
};