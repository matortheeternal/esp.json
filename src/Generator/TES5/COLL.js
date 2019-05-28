let {
    def, subrecord, uint32, uint8, struct, 
    req, string, ckFormId, array, record
} = require('../helpers');

module.exports = () => {
    record('COLL', 'Collision Layer', {
        members: [
            def('EDID'),
            def('DESCReq'),
            subrecord('BNAM', uint32('Index', null)),
            req(subrecord('FNAM', struct('Debug Color', [
                uint8('Red'),
                uint8('Green'),
                uint8('Blue'),
                uint8('Unused')
            ]))),
            subrecord('GNAM', uint32('Flags', {
                "0": "Trigger Volume",
                "1": "Sensor",
                "2": "Navmesh Obstacle"
            })),
            req(subrecord('MNAM', string('Name'))),
            subrecord('INTV', uint32('Interactables Count', null)),
            subrecord('CNAM', array('Collides With', ckFormId('Forms', ['COLL']), 0))
        ]
    })
};