let {
    addDef, int32, uint8, bytes, subrecord, 
    struct, ckFormId, req, string, def, 
    sortKey, multiStruct, arrayOfSubrecord
} = require('../helpers');

module.exports = () => {
    addDef('DEST', req(multiStruct(Destructible, [
        subrecord('DEST', struct('Header', [
            int32('Health'),
            uint8('DEST Count'),
            uint8('VATS Targetable', {
                "0": "False",
                "1": "True"
            }),
            bytes('Unknown', 2)
        ])),
        arrayOfSubrecord('Stages', undefined)
    ])));
};