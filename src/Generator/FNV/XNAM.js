let {
    addDef, ckFormId, int32, enumeration, uint32, 
    format, sortKey, struct, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XNAM', 
        subrecord('XNAM', sortKey([0], struct('Relation', [
            ckFormId('Faction', ['FACT', 'RACE']),
            int32('Modifier'),
            format(uint32('Group Combat Reaction'), enumeration({
                0: 'Neutral',
                1: 'Enemy',
                2: 'Ally',
                3: 'Friend'
            }))
        ])))
    );
};