let {
    flags, def, req, localized, string, 
    subrecord, opts, unknown, ckFormId, uint32, 
    int32, struct, memberArray, elementCounter, bytes, 
    size, conflictType, memberStruct, enumeration, uint8, 
    format, uint16, record
} = require('../helpers');

module.exports = () => {
    record('TERM', 'Terminal', {
        flags: flags({
            4: 'Unknown 4',
            12: 'Ignored',
            13: 'Unknown 13',
            15: 'Has Distant LOD',
            16: 'Random Anim Start'
        }),
        members: [
            def('EDID'),
            def('VMADFragmentedPERK'),
            req(def('OBND')),
            def('PTRN'),
            opts(subrecord('NAM0', localized(string('Header Text'))), {
                "transform": "keepcase"
            }),
            opts(subrecord('WNAM', localized(string('Welcome Text'))), {
                "transform": "keepcase"
            }),
            def('FULL'),
            def('MODL'),
            def('KSIZ'),
            def('KWDAs'),
            def('PRPS'),
            subrecord('PNAM', unknown()),
            subrecord('SNAM', ckFormId('Looping Sound', ['SNDR'])),
            subrecord('FNAM', unknown()),
            subrecord('COCT', uint32('Holds Holotape (Count)')),
            elementCounter('COCT - Holds Holotape (Count)', 
                memberArray('Holotapes', 
                    subrecord('CNTO', struct('Holotape', [
                        ckFormId('Item', ['NULL', 'NOTE']),
                        int32('Count')
                    ]))
                )
            ),
            def('MNAMFurnitureMarker'),
            subrecord('WBDT', size(0, bytes('Workbench Data (unused)'))),
            subrecord('XMRK', string('Marker Model')),
            def('SNAMMarkerParams'),
            subrecord('BSIZ', conflictType('Benign', uint32('Count'))),
            elementCounter('BSIZ - Count', 
                memberArray('Body Text', 
                    memberStruct('Item', [
                        opts(subrecord('BTXT', conflictType('Translate', localized(string('Text')))), {
                            "transform": "keepcase"
                        }),
                        def('CTDAs')
                    ])
                )
            ),
            subrecord('ISIZ', conflictType('Benign', uint32('Count'))),
            elementCounter('ISIZ - Count', 
                memberArray('Menu Items', 
                    memberStruct('Menu Item', [
                        opts(subrecord('ITXT', conflictType('Translate', localized(string('Item Text')))), {
                            "transform": "keepcase"
                        }),
                        opts(subrecord('RNAM', conflictType('Translate', localized(string('Response Text')))), {
                            "transform": "keepcase"
                        }),
                        req(subrecord('ANAM', format(uint8('Type'), enumeration({
                            0: 'Unknown 0',
                            1: 'Unknown 1',
                            2: 'Unknown 2',
                            3: 'Unknown 3',
                            4: 'Submenu - Terminal',
                            5: 'Submenu - Return to Top Level',
                            6: 'Submenu - Force Redraw',
                            7: 'Unknown 7',
                            8: 'Display Text',
                            9: 'Unknown 9',
                            10: 'Unknown 10',
                            11: 'Unknown 11',
                            12: 'Unknown 12',
                            13: 'Unknown 13',
                            14: 'Unknown 14',
                            15: 'Unknown 15',
                            16: 'Display Image'
                        })))),
                        subrecord('ITID', uint16('Item ID')),
                        opts(subrecord('UNAM', conflictType('Translate', localized(string('Display Text')))), {
                            "transform": "keepcase"
                        }),
                        subrecord('VNAM', string('Show Image')),
                        subrecord('TNAM', ckFormId('Submenu', ['TERM'])),
                        def('CTDAs')
                    ])
                )
            )
        ]
    })
};