let {
    addDef, float, req, uint32, subrecord, 
    sortKey, struct
} = require('../helpers');

module.exports = () => {
    addDef('EFIT', 
        subrecord('EFIT', sortKey([3, 4], struct('', [
            req(float('Magnitude')),
            uint32('Area'),
            uint32('Duration')
        ])))
    );
};