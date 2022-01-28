let {
    def, ckFormId, conflictType, subrecord, sorted, 
    memberArray, enumeration, uint8, format, req, 
    record
} = require('../helpers');

module.exports = () => {
    record('DIAL', 'Dialog Topic', {
        members: [
            def('EDID'),
            sorted(memberArray('Quests', 
                subrecord('QSTI', conflictType('Benign', ckFormId('Quest', ['QUST'])))
            )),
            sorted(memberArray('Quests?', 
                subrecord('QSTR', conflictType('Benign', ckFormId('Quest?', ['QUST'])))
            )),
            def('FULL'),
            req(subrecord('DATA', format(uint8('Type'), enumeration({
                0: 'Topic',
                1: 'Conversation',
                2: 'Combat',
                3: 'Persuasion',
                4: 'Detection',
                5: 'Service',
                6: 'Miscellaneous'
            }))))
        ]
    })
};