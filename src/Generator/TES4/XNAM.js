let {
    addDef, ckFormId, int32, sortKey, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XNAM', 
        subrecord('XNAM', sortKey([0], struct('Relation', [
            ckFormId('Faction', ['FACT', 'RACE']),
            int32('Modifier')
        ])))
    );
};