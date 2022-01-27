let {
    req, def, ckFormId, subrecord, bytes, 
    size, conflictType, flags, uint32, format, 
    opts, string, memberArray, memberStruct, record
} = require('../helpers');

module.exports = () => {
    record('MESG', 'Message', {
        members: [
            req(def('EDID')),
            req(def('DESC')),
            def('FULL'),
            req(subrecord('INAM', ckFormId('Icon', ['MICN', 'NULL']))),
            subrecord('NAM0', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM1', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM2', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM3', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM4', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM5', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM6', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM7', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM8', conflictType('Ignore', size(0, bytes('Unused')))),
            subrecord('NAM9', conflictType('Ignore', size(0, bytes('Unused')))),
            opts(req(subrecord('DNAM', format(uint32('Flags'), flags({
                0: 'Message Box',
                1: 'Auto Display'
            })))), {
                "afterSet": "MESGDNAMAfterSet"
            }),
            subrecord('TNAM', uint32('Display Time')),
            memberArray('Menu Buttons', 
                memberStruct('Menu Button', [
                    opts(subrecord('ITXT', conflictType('Translate', string('Button Text'))), {
                        "transform": "keepcase"
                    }),
                    def('CTDAs')
                ])
            )
        ]
    })
};