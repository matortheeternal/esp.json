let {
    def, req, subrecord, ckFormId, flags, 
    uint32, format, localized, string, memberArray, 
    memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('MESG', 'Message', {
        members: [
            def('EDID'),
            req(def('DESC')),
            def('FULL'),
            req(subrecord('INAM', ckFormId('Icon (unused)', ['NULL']))),
            subrecord('QNAM', ckFormId('Owner Quest', ['QUST'])),
            subrecord('DNAM', format(uint32('Flags'), flags({
                0: 'Message Box',
                1: 'Auto Display'
            }))),
            subrecord('TNAM', uint32('Display Time')),
            memberArray('Menu Buttons', 
                memberStruct('Menu Button', [
                    subrecord('ITXT', localized(string('Button Text'))),
                    def('CTDAs')
                ])
            )
        ]
    })
};