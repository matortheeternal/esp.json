let {
    addDef, int32, uint8, def, format, 
    bytes, size, struct, subrecord, flags, 
    ckFormId, req, string, sortKey, memberStruct, 
    empty, memberArray
} = require('../helpers');

module.exports = () => {
    addDef('DESTActor', 
        memberStruct('Destructible', [
            subrecord('DEST', struct('Header', [
                int32('Health'),
                uint8('Count'),
                format(uint8('VATS Targetable'), def('BoolEnum')),
                size(2, bytes('Unknown'))
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
                        subrecord('DMDL', string('Model FileName'))
                    ])),
                    def('DMDT'),
                    def('DMDC'),
                    def('DMDS'),
                    req(subrecord('DSTF', empty('End Marker')))
                ])
            )
        ])
    );
};