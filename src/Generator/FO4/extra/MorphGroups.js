let {
    addDef, string, subrecord, uint32, conflictType,
    def, format, localized, ckFormId, unknown,
    memberStruct, memberArray, elementCounter, array
} = require('../../helpers');

module.exports = () => {
    addDef('MorphGroups', {
        type: 'memberArray',
        member: memberStruct('Morph Group', [
            subrecord('MPGN', string('Name')),
            subrecord('MPPC', conflictType('Benign', uint32('Count'))),
            elementCounter('MPPC - Count',
                memberArray('Morph Presets',
                    memberStruct('Morph Preset', [
                        subrecord('MPPI', format(uint32('Index'), def('IntToHexStr'))),
                        subrecord('MPPN', conflictType('Translate', localized(string('Name')))),
                        subrecord('MPPM', string('Unknown')),
                        subrecord('MPPT', ckFormId('Texture', ['TXST'])),
                        subrecord('MPPF', unknown())
                    ])
                )
            ),
            subrecord('MPPK', unknown()),
            subrecord('MPGS', array('Unknown',
                format(uint32('Index'), def('IntToHexStr'))
            ))
        ])
    });
};
