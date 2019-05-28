let {
    def, uint16, uint8, bytes, uint32, 
    subrecord, struct, string, ckFormId, arrayOfSubrecord, 
    multiStruct, req, sortKey, int32, formId, 
    int16, subrecordUnion, record
} = require('../helpers');

module.exports = () => {
    record('QUST', 'Quest', {
        members: [
            def('EDID'),
            def('VMADFragmentedQUST'),
            def('FULL'),
            subrecord('DNAM', struct('General', [
                uint16('Flags', {
                    "0": "Start Game Enabled",
                    "1": "Unknown 2",
                    "2": "Unknown 3",
                    "3": "Allow repeated stages",
                    "4": "Unknown 5",
                    "5": "Unknown 6",
                    "6": "Unknown 7",
                    "7": "Unknown 8",
                    "8": "Run Once",
                    "9": "Exclude from dialogue export",
                    "10": "Warn on alias fill failure",
                    "11": "Unknown 12",
                    "12": "Unknown 13"
                }),
                uint8('Priority'),
                uint8('Form Version', null),
                bytes('Unknown', 4),
                uint32('Type', def('QuestTypeEnum'))
            ])),
            subrecord('ENAM', string('Event', 4)),
            arrayOfSubrecord('Text Display Globals', undefined),
            subrecord('FLTR', string('Object Window Filter')),
            req(multiStruct(Quest Dialogue Conditions, [
                def('CTDAs')
            ])),
            subrecord('NEXT', empty('Marker')),
            def('CTDAs'),
            arrayOfSubrecord('Stages', sortKey([0], multiStruct('Stage', undefined))),
            arrayOfSubrecord('Objectives', undefined),
            subrecord('ANAM', uint32('Next Alias ID')),
            arrayOfSubrecord('Aliases', undefined),
            req(subrecord('NNAM', string('Description'))),
            arrayOfSubrecord('Targets', undefined)
        ]
    })
};