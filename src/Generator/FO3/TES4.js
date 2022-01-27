let {
    float, uint32, def, format, struct, 
    subrecord, req, bytes, size, conflictType, 
    string, memberStruct, memberArray, opts, ckFormId, 
    array, record
} = require('../helpers');

module.exports = () => {
    record('TES4', 'Main File Header', {
        members: [
            req(subrecord('HEDR', struct('Header', [
                float('Version'),
                uint32('Number of Records'),
                format(uint32('Next Object ID'), def('NextObjectIDToString'))
            ]))),
            subrecord('OFST', conflictType('Ignore', size(0, bytes('Unknown')))),
            subrecord('DELE', conflictType('Ignore', size(0, bytes('Unknown')))),
            req(subrecord('CNAM', conflictType('Translate', string('Author')))),
            subrecord('SNAM', conflictType('Translate', string('Description'))),
            opts(memberArray('Master Files', 
                memberStruct('Master File', [
                    req(subrecord('MAST', string('FileName'))),
                    req(subrecord('DATA', conflictType('Ignore', size(8, bytes('Unused')))))
                ])
            ), {
                "protected": 1
            }),
            subrecord('ONAM', array('Overriden Forms', 
                ckFormId('Form', [
                    'REFR', 'ACHR', 'ACRE', 'PMIS', 'PBEA',
                    'PGRE', 'LAND', 'NAVM'
                ])
            )),
            subrecord('SCRN', bytes('Screenshot'))
        ]
    })
};