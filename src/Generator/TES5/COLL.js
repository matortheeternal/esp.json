let {
    def, req, subrecord, uint32, uint8, 
    struct, format, string, ckFormId, array, 
    record
} = require('../helpers');

module.exports = () => {
    record('COLL', 'Collision Layer', {
        members: [
            def('EDID'),
            req(def('DESC')),
            subrecord('BNAM', uint32('Index')),
            req(subrecord('FNAM', struct('Debug Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                uint8('Unused')
            ]))),
            subrecord('GNAM', format(uint32('Flags'), {
                0: 'Trigger Volume',
                1: 'Sensor',
                2: 'Navmesh Obstacle'
            })),
            req(subrecord('MNAM', string('Name'))),
            subrecord('INTV', uint32('Interactables Count')),
            subrecord('CNAM', array('Collides With', 
                ckFormId('Forms', ['COLL'])
            ))
        ]
    })
};