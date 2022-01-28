let {
    flags, def, uint16, format, div, 
    struct, subrecord, ckFormId, conflictType, string, 
    uint8, bytes, size, int32, localized, 
    req, opts, empty, memberStruct, memberArray, 
    unknown, uint32, int16, enumeration, record
} = require('../helpers');

module.exports = () => {
    record('INFO', 'Dialog response', {
        flags: flags({
            6: 'Unknown 6',
            7: 'Exclude From Export',
            12: 'Ignored',
            13: 'Actor Changed'
        }),
        members: [
            def('EDID'),
            def('VMADFragmentedINFO'),
            subrecord('ENAM', struct('Response flags', [
                format(uint16('Flags'), flags({
                    0: 'Start Scene on End',
                    1: 'Random',
                    2: 'Say Once',
                    3: 'Requires Player Activation',
                    4: 'Unknown 4',
                    5: 'Random End',
                    6: 'End Running Scene',
                    7: 'ForceGreet Hello',
                    8: 'Player Address',
                    9: 'Unknown 9',
                    10: 'Can Move While Greeting',
                    11: 'No LIP File',
                    12: 'Requires post-processing',
                    13: 'Audio Output Override',
                    14: 'Has Capture',
                    15: 'Unknown 16'
                })),
                format(uint16('Reset Hours'), div(2730))
            ])),
            subrecord('TPIC', ckFormId('Topic', ['DIAL'])),
            subrecord('PNAM', conflictType('Benign', ckFormId('Previous INFO', ['INFO', 'NULL']))),
            subrecord('DNAM', ckFormId('Shared INFO', ['INFO'])),
            subrecord('GNAM', ckFormId('INFO group', ['INFO'])),
            subrecord('IOVR', string('Override FileName')),
            memberArray('Responses', 
                memberStruct('Response', [
                    subrecord('TRDA', struct('Response Data', [
                        ckFormId('Emotion', ['KYWD', 'FFFF']),
                        uint8('Response number'),
                        size(3, bytes('Unused')),
                        size(2, bytes('Unknown')),
                        uint16('Interrupt Percentage'),
                        int32('Camera Target Alias'),
                        int32('Camera Location Alias')
                    ])),
                    opts(req(subrecord('NAM1', conflictType('Translate', localized(string('Response Text'))))), {
                        "keepCase": true
                    }),
                    req(subrecord('NAM2', string('Script Notes'))),
                    req(subrecord('NAM3', string('Edits'))),
                    req(subrecord('NAM4', string('Alternate LIP Text'))),
                    subrecord('SNAM', ckFormId('Idle Animations: Speaker', ['IDLE'])),
                    subrecord('LNAM', ckFormId('Idle Animations: Listener', ['IDLE'])),
                    subrecord('TNAM', uint16('Interrupt Percentage')),
                    subrecord('NAM9', bytes('Text Hash')),
                    subrecord('SRAF', ckFormId('Camera Path', ['CPTH'])),
                    subrecord('WZMD', empty('Stop on Scene End'))
                ])
            ),
            def('CTDAs'),
            opts(subrecord('RNAM', conflictType('Translate', localized(string('Prompt')))), {
                "keepCase": true
            }),
            subrecord('ANAM', ckFormId('Speaker', ['NPC_'])),
            subrecord('TSCE', ckFormId('Start Scene', ['SCEN'])),
            subrecord('INTV', unknown()),
            subrecord('ALFA', int32('Forced Alias')),
            subrecord('ONAM', ckFormId('Audio Output Override', ['SOPM'])),
            subrecord('GREE', uint32('Greet Distance')),
            subrecord('TIQS', struct('Set Parent Quest Stage', [
                int16('On Begin'),
                int16('On End')
            ])),
            subrecord('NAM0', string('Start Scene Phase')),
            subrecord('INCC', format(uint32('Challenge'), enumeration({
                0: 'None',
                1: 'Easy',
                2: 'Medium',
                3: 'Hard',
                4: 'Always Succeeds',
                5: 'Easy Repeatable',
                6: 'Medium Repeatable',
                7: 'Hard Repeatable'
            }))),
            subrecord('MODQ', ckFormId('Reset Global', ['GLOB'])),
            subrecord('INAM', format(uint32('Subtitle Priority'), enumeration({
                0: 'Low',
                1: 'Normal',
                2: 'Unknown 2',
                3: 'Force'
            })))
        ]
    })
};