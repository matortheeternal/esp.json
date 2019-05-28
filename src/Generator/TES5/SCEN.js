let {
    def, subrecord, uint32, string, multiStruct, 
    unknown, req, arrayOfSubrecord, uint16, int32, 
    float, ckFormId, record
} = require('../helpers');

module.exports = () => {
    record('SCEN', 'Scene', {
        members: [
            def('EDID'),
            def('VMADFragmentedSCEN'),
            subrecord('FNAM', uint32('Flags', {
                "0": "Begin on Quest Start",
                "1": "Stop on Quest End",
                "2": "Unknown 3",
                "3": "Repeat Conditions While True",
                "4": "Interruptible"
            })),
            arrayOfSubrecord('Phases', undefined),
            arrayOfSubrecord('Actors', undefined),
            arrayOfSubrecord('Actions', undefined),
            req(multiStruct(Unused, [
                subrecord('SCHR', unknown()),
                subrecord('SCDA', unknown()),
                subrecord('SCTX', unknown()),
                subrecord('QNAM', unknown()),
                subrecord('SCRO', unknown())
            ])),
            subrecord('NEXT', empty('Marker')),
            req(multiStruct(Unused, [
                subrecord('SCHR', unknown()),
                subrecord('SCDA', unknown()),
                subrecord('SCTX', unknown()),
                subrecord('QNAM', unknown()),
                subrecord('SCRO', unknown())
            ])),
            subrecord('PNAM', ckFormId('Quest', ['QUST'])),
            subrecord('INAM', uint32('Last Action Index')),
            subrecord('VNAM', unknown()),
            def('CTDAs')
        ]
    })
};