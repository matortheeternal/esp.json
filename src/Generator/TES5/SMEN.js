let {
    def, ckFormId, subrecord, conflictType, req, 
    uint32, format, unknown, string, size, 
    record
} = require('../helpers');

module.exports = () => {
    record('SMEN', 'Story Manager Event Node', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Parent ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ])),
            subrecord('SNAM', conflictType('Benign', ckFormId('Previous Sibling ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ]))),
            req(def('CITC')),
            def('CTDAsCount'),
            subrecord('DNAM', format(uint32('Flags'), def('SMNodeFlags'))),
            subrecord('XNAM', unknown()),
            subrecord('ENAM', size(4, string('Type')))
        ]
    })
};