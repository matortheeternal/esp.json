let {
    addDef,  signatures
} = require('../../helpers');

module.exports = () => {
    addDef('sigReferences',
        signatures([
            'NULL', 'PLYR', 'ACHR', 'REFR', 'PGRE', 'PHZD',
            'PMIS', 'PARW', 'PBAR', 'PBEA', 'PCON', 'PFLA'
        ])
    );
};
