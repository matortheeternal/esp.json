let {
    addDef, formId, uint16, opts, sorted, 
    array, prefix, sortKey, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MNAMNAVM', 
        subrecord('MNAM', sorted(array('PreCut Map Entries', 
            sortKey([0], struct('PreCut Map Entry', [
                formId('Reference'),
                prefix(2, sorted(array('Triangles', 
                    opts(uint16('Triangle'), {
                        "linksToCallback": "TriangleLinksTo"
                    })
                )))
            ]))
        )))
    );
};