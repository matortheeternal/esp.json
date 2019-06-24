let {
    addDef, int32, uint8, enumeration, format, 
    bytes, size, subrecord, struct, flags, 
    ckFormId, req, string, sortKey, multiStruct, 
    def, empty, arrayOfSubrecord
} = require('../helpers');

module.exports = () => {
    addDef('DESTActor', 
        req(multiStruct('Destructible', [
            subrecord('DEST', struct('Header', [
                int32('Health'),
                uint8('Count'),
                format(uint8('VATS Targetable'), enumeration({
                    0: 'False',
                    1: 'True'
                })),
                size(2, bytes('Unknown'))
            ])),
            arrayOfSubrecord('Stages', 
                multiStruct('Stage', [
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
                    sortKey([0], multiStruct('Model', [
                        subrecord('DMDL', string('Model FileName'))
                    ])),
                    def('DMDT'),
                    def('DMDSs'),
                    req(subrecord('DSTF', empty('End Marker')))
                ])
            )
        ]))
    );
};