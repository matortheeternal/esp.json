let {
    def, req, ckFormId, conflictType, subrecord, 
    flags, uint32, format, opts, localized, 
    string, memberArray, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('MESG', 'Message', {
        members: [
            def('EDID'),
            req(def('DESC')),
            def('FULL'),
            req(subrecord('INAM', conflictType('Ignore', ckFormId('Icon (unused)', ['NULL'])))),
            subrecord('QNAM', ckFormId('Owner Quest', ['QUST'])),
            opts(req(subrecord('DNAM', format(uint32('Flags'), flags({
                0: 'Message Box',
                1: 'Auto Display'
            })))), {
                "afterSet": "MESGDNAMAfterSet"
            }),
            subrecord('TNAM', uint32('Display Time')),
            memberArray('Menu Buttons', 
                memberStruct('Menu Button', [
                    subrecord('ITXT', conflictType('Translate', localized(string('Button Text')))),
                    def('CTDAs')
                ])
            )
        ]
    })
};