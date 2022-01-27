let {
    req, def, enumeration, uint32, format, 
    flags, bytes, size, struct, subrecord, 
    formId, record
} = require('../helpers');

module.exports = () => {
    record('CHAL', 'Challenge', {
        members: [
            req(def('EDID')),
            def('FULL'),
            def('ICON'),
            def('SCRI'),
            def('DESC'),
            subrecord('DATA', struct('Data', [
                format(uint32('Type'), enumeration({
                    0: 'Kill from a Form List',
                    1: 'Kill a specific FormID',
                    2: 'Kill any in a category',
                    3: 'Hit an Enemy',
                    4: 'Discover a Map Marker',
                    5: 'Use an Item',
                    6: 'Acquire an Item',
                    7: 'Use a Skill',
                    8: 'Do Damage',
                    9: 'Use an Item from a List',
                    10: 'Acquire an Item from a List',
                    11: 'Miscellaneous Stat',
                    12: 'Craft Using an Item',
                    13: 'Scripted Challenge'
                })),
                uint32('Threshold'),
                format(uint32('Flags'), flags({
                    0: 'Start Disabled',
                    1: 'Recurring',
                    2: 'Show Zero Progress'
                })),
                uint32('Interval'),
                size(2, bytes('(depends on type)')),
                size(2, bytes('(depends on type)')),
                size(4, bytes('(depends on type)'))
            ])),
            subrecord('SNAM', formId('(depends on type)')),
            subrecord('XNAM', formId('(depends on type)'))
        ]
    })
};