let {
    def, req, ckFormId, conflictType, subrecord, 
    flags, uint32, format, opts, string, 
    localized, memberArray, memberStruct, record
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
                1: 'Delay Initial Display'
            })))), {
                "afterSet": "MESGDNAMAfterSet"
            }),
            subrecord('TNAM', uint32('Display Time')),
            subrecord('SNAM', string('SWF')),
            opts(subrecord('NNAM', conflictType('Translate', localized(string('Short Title')))), {
                "transform": "keepcase"
            }),
            memberArray('Menu Buttons', 
                memberStruct('Menu Button', [
                    opts(subrecord('ITXT', conflictType('Translate', localized(string('Button Text')))), {
                        "transform": "keepcase"
                    }),
                    def('CTDAs')
                ])
            )
        ]
    })
};