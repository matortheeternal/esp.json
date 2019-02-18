let {
    addDef, subrecord, sortKey, struct, float, 
    req, uint32
} = require('../helpers');

module.exports = game => {
    addDef('EFIT', 
        req(subrecord('EFIT', sortKey([3, 4], struct('', [
            req(float('Magnitude')),
            uint32('Area'),
            uint32('Duration'),
        ])))),
    );
};