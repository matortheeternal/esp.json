let {
    addDef, float, req, uint32, sortKey, 
    struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('EFIT', 
        req(subrecord('EFIT', sortKey([3, 4], struct('', [
            req(float('Magnitude')),
            uint32('Area'),
            uint32('Duration')
        ]))))
    );
};