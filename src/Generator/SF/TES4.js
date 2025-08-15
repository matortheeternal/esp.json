let {
    flags, float, uint32, def, format,
    struct, subrecord, req, bytes, size,
    conflictType, string, memberStruct, memberArray, opts,
    ckFormId, array, formId, record
} = require('../helpers');

module.exports = () => {
    record('TES4', 'Main File Header', {
        flags: flags({
            0: 'ESM',
            7: 'Localized',
            9: 'ESL',
            12: 'Ignored'
        }),
        members: [
            req(subrecord('HEDR', struct('Header', [
                float('Version'),
                uint32('Number of Records'),
                format(uint32('Next Object ID'), def('NextObjectIDToString'))
            ]))),
            // subrecord('OFST', conflictType('Ignore', size(0, bytes('Unknown')))),
            // subrecord('DELE', conflictType('Ignore', size(0, bytes('Unknown')))),
            // req(subrecord('CNAM', conflictType('Translate', string('Author')))),
            // subrecord('SNAM', conflictType('Translate', string('Description'))),
            // opts(memberArray('Master Files',
            //     memberStruct('Master File', [
            //         req(subrecord('MAST', string('FileName'))),
            //         req(subrecord('DATA', conflictType('Ignore', size(8, bytes('Unknown')))))
            //     ])
            // ), {
            //     "defFlags": [
            //         "protected"
            //     ]
            // }),
            // subrecord('ONAM', array('Overridden Forms',
            //     ckFormId('Form', [
            //         'ACHR', 'LAND', 'NAVM', 'REFR', 'PGRE',
            //         'PHZD', 'PMIS', 'PARW', 'PBAR', 'PBEA',
            //         'PCON', 'PFLA', 'DLBR', 'DIAL', 'INFO',
            //         'SCEN'
            //     ])
            // )),
            // subrecord('SCRN', bytes('Screenshot')),
            // memberArray('Transient Types (CK only)',
            //     subrecord('TNAM', struct('Transient Type', [
            //         uint32('FormType'),
            //         array('Unknown',
            //             formId('Unknown')
            //         )
            //     ]))
            // ),
            // subrecord('INTV', uint32('Unknown')),
            // subrecord('INCC', uint32('Unknown'))
        ]
    })
};
