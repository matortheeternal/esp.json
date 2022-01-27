let {
    addDef, int32, uint8, flags, format, 
    bytes, size, struct, subrecord, ckFormId, 
    req, string, conflictType, sortKey, memberStruct, 
    empty, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('DESTActor', 
        memberStruct('Destructible', [
            subrecord('DEST', struct('Header', [
                int32('Health'),
                uint8('Count'),
                format(uint8('Flags'), flags({
                    0: 'VATS Targetable'
                })),
                size(2, bytes('Unused'))
            ])),
            memberArray('Stages', 
                memberStruct('Stage', [
                    req(subrecord('DSTD', struct('Destruction Stage Data', [
                        uint8('Health %'),
                        uint8('Index'),
                        uint8('Damage Stage'),
                        format(uint8('Flags'), flags({
                            0: 'Cap Damage',
                            1: 'Disable',
                            2: 'Destroy'
                        })),
                        int32('Self Damage per Second'),
                        ckFormId('Explosion', ['EXPL', 'NULL']),
                        ckFormId('Debris', ['DEBR', 'NULL']),
                        int32('Debris Count')
                    ]))),
                    sortKey([0], memberStruct('Model', [
                        subrecord('DMDL', string('Model FileName')),
                        subrecord('DMDT', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
                    ])),
                    req(subrecord('DSTF', empty('End Marker')))
                ])
            )
        ])
    );
};