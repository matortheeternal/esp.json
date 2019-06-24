let {
    addDef, int32, uint8, format, bytes, 
    subrecord, struct, ckFormId, req, string, 
    def, sortKey, multiStruct, empty, arrayOfSubrecord
} = require('../helpers');

module.exports = () => {
    addDef('DEST', 
        req(multiStruct('Destructible', [
            subrecord('DEST', struct('Header', [
                int32('Health'),
                uint8('DEST Count'),
                format(uint8('VATS Targetable'), {
                    0: 'False',
                    1: 'True'
                }),
                bytes('Unknown', 2)
            ])),
            arrayOfSubrecord('Stages', 
                req(multiStruct('Stage', [
                    req(subrecord('DSTD', struct('Destruction Stage Data', [
                        uint8('Health %'),
                        uint8('Index'),
                        uint8('Model Damage Stage'),
                        format(uint8('Flags'), {
                            0: 'Cap Damage',
                            1: 'Disable',
                            2: 'Destroy',
                            3: 'Ignore External Dmg'
                        }),
                        int32('Self Damage per Second'),
                        ckFormId('Explosion', ['EXPL', 'NULL']),
                        ckFormId('Debris', ['DEBR', 'NULL']),
                        int32('Debris Count')
                    ]))),
                    req(sortKey([0], multiStruct('Model', [
                        subrecord('DMDL', string('Model FileName')),
                        def('DMDT'),
                        def('DMDSs')
                    ]))),
                    req(subrecord('DSTF', empty('End Marker')))
                ]))
            )
        ]))
    );
};