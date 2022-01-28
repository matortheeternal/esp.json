let {
    addDef, int32, uint8, flags, format, 
    bytes, size, struct, subrecord, ckFormId, 
    uint32, sortKey, sorted, array, req, 
    string, def, memberStruct, unordered, empty, 
    memberArray
} = require('../helpers');

module.exports = () => {
    addDef('DEST', 
        memberStruct('Destructible', [
            subrecord('DEST', struct('Header', [
                int32('Health'),
                uint8('DEST Count'),
                format(uint8('Flags'), flags({
                    0: 'VATS Targetable',
                    1: 'Large Actor Destroys'
                })),
                size(2, bytes('Unknown'))
            ])),
            subrecord('DAMC', sorted(array('Resistances', 
                sortKey([0], struct('Resistance', [
                    ckFormId('Damage Type', ['DMGT']),
                    uint32('Value')
                ]))
            ))),
            memberArray('Stages', 
                memberStruct('Stage', [
                    req(subrecord('DSTD', struct('Destruction Stage Data', [
                        uint8('Health %'),
                        uint8('Index'),
                        uint8('Model Damage Stage'),
                        format(uint8('Flags'), flags({
                            0: 'Cap Damage',
                            1: 'Disable',
                            2: 'Destroy',
                            3: 'Ignore External Dmg',
                            4: 'Becomes Dynamic'
                        })),
                        int32('Self Damage per Second'),
                        ckFormId('Explosion', ['EXPL', 'NULL']),
                        ckFormId('Debris', ['DEBR', 'NULL']),
                        int32('Debris Count')
                    ]))),
                    subrecord('DSTA', string('Sequence Name')),
                    unordered(sortKey([0], memberStruct('Model', [
                        req(subrecord('DMDL', string('Model FileName'))),
                        def('DMDT'),
                        def('DMDC'),
                        def('DMDS')
                    ]))),
                    req(subrecord('DSTF', empty('End Marker')))
                ])
            )
        ])
    );
};