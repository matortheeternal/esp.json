let {
    def, string, subrecord, enumeration, uint32, 
    format, ckFormId, memberStruct, memberArray, bytes, 
    size, uint8, struct, int8, div, 
    uint16, union, conflictType, empty, sortKey, 
    sorted, elementCounter, record
} = require('../helpers');

module.exports = () => {
    record('SNDR', 'Sound Descriptor', {
        members: [
            def('EDID'),
            subrecord('NNAM', string('Notes')),
            subrecord('CNAM', format(uint32('Descriptor Type'), enumeration({
                519001098: 'Standard',
                1415912003: 'Compound',
                3977607907: 'AutoWeapon'
            }))),
            subrecord('GNAM', ckFormId('Category', ['SNCT'])),
            subrecord('SNAM', ckFormId('Alternate Sound For', ['SNDR'])),
            memberArray('Sounds', 
                memberStruct('Sound Files', [
                    subrecord('ANAM', string('File Name'))
                ])
            ),
            subrecord('ONAM', ckFormId('Output Model', ['SOPM'])),
            def('CTDAs'),
            subrecord('LNAM', struct('Values', [
                size(1, bytes('Unknown')),
                format(uint8('Looping'), enumeration({
                    0: 'None',
                    8: 'Loop',
                    16: 'Envelope Fast',
                    32: 'Envelope Slow'
                })),
                uint8('Sidechain'),
                uint8('Rumble Send Value = (Small / 7) + ((Big / 7) * 16)')
            ])),
            subrecord('BNAM', union('Data', 'SNDRDataDecider', [
                struct('Values', [
                    int8('% Frequency Shift'),
                    int8('% Frequency Variance'),
                    uint8('Priority'),
                    uint8('db Variance'),
                    format(uint16('Static Attenuation (db)'), div(100))
                ]),
                ckFormId('Base Descriptor', ['SNDR'])
            ])),
            memberArray('Descriptors', 
                subrecord('DNAM', ckFormId('Descriptor', ['SNDR']))
            ),
            subrecord('ITMC', conflictType('Benign', uint32('Count'))),
            elementCounter('ITMC - Count', 
                sorted(memberArray('Rates of Fire', 
                    sortKey([1], memberStruct('Sound', [
                        subrecord('ITMS', empty('Marker Start')),
                        subrecord('INTV', uint32('RoF (RPM)')),
                        subrecord('FNAM', string('File')),
                        subrecord('ITME', empty('Marker End'))
                    ]))
                ))
            )
        ]
    })
};