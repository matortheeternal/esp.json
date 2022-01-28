let {
    def, enumeration, uint32, format, subrecord, 
    opts, float, struct, union, memberStruct, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('AECH', 'Audio Effect Chain', {
        members: [
            def('EDID'),
            memberArray('Effects', 
                memberStruct('Effect', [
                    opts(subrecord('KNAM', format(uint32('Type'), enumeration({
                        411269967: 'BSDelayEffect',
                        2252866750: 'BSOverdrive',
                        4015480703: 'BSStateVariableFilter'
                    }))), {
                        "afterSet": "AECHTypeAfterSet"
                    }),
                    subrecord('DNAM', struct('Data', [
                        format(uint32('Enabled'), def('BoolEnum')),
                        union('Value', 'AECHDataDecider', [
                            struct('Overdrive', [
                                float('Input Gain'),
                                float('Output Gain'),
                                float('Upper Threshold'),
                                float('Lower Threshold')
                            ]),
                            struct('State Variable Filter', [
                                float('Center Freq'),
                                float('Q Value'),
                                format(uint32('Filter Mode'), enumeration({
                                    0: 'High Pass',
                                    1: 'Low Pass',
                                    2: 'Band Pass',
                                    3: 'Notch'
                                }))
                            ]),
                            struct('Delay Effect', [
                                float('Feedback %'),
                                float('Wet Mix %'),
                                uint32('Delay MS')
                            ])
                        ])
                    ]))
                ])
            )
        ]
    })
};