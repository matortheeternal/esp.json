let {
    def, ckFormId, conflictType, subrecord, sorted, 
    memberArray, float, req, enumeration, uint8, 
    format, flags, struct, record
} = require('../helpers');

module.exports = () => {
    record('DIAL', 'Dialog Topic', {
        members: [
            def('EDIDReqKC'),
            sorted(memberArray('Quests', 
                subrecord('QSTI', conflictType('Benign', ckFormId('Quest', ['QUST'])))
            )),
            sorted(memberArray('Quests?', 
                subrecord('QSTR', conflictType('Benign', ckFormId('Quest?', ['QUST'])))
            )),
            def('FULL'),
            req(subrecord('PNAM', float('Priority'))),
            req(subrecord('DATA', struct('', [
                format(uint8('Type'), enumeration({
                    0: 'Topic',
                    1: 'Conversation',
                    2: 'Combat',
                    3: 'Persuasion',
                    4: 'Detection',
                    5: 'Service',
                    6: 'Miscellaneous',
                    7: 'Radio'
                })),
                format(uint8('Flags'), flags({
                    0: 'Rumors',
                    1: 'Top-level'
                }))
            ])))
        ]
    })
};