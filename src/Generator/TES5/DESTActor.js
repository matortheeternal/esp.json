let {
    addDef, int32, uint8, bytes, subrecord, 
    struct, ckFormId, req, string, sortKey, 
    multiStruct, def, arrayOfSubrecord
} = require('../helpers');

module.exports = () => {
    addDef('DESTActor', req(multiStruct(Destructible, [
        subrecord('DEST', struct('Header', [
            int32('Health'),
            uint8('Count'),
            uint8('VATS Targetable', {
                "0": "False",
                "1": "True"
            }),
            bytes('Unknown', 2)
        ])),
        arrayOfSubrecord('Stages', undefined)
    ])));
};