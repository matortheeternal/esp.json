let {
    addDef, ckFormId, subrecord, int32, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('Ownership', 
        memberStruct('Ownership', [
            subrecord('XOWN', ckFormId('Owner', [
                'FACT', 'ACHR', 'NPC_'
            ])),
            subrecord('XRNK', int32('Faction rank'))
        ])
    );
};