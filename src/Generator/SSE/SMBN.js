let {
    def, subrecord, ckFormId, req, uint32, 
    format, unknown, record
} = require('../helpers');

module.exports = () => {
    record('SMBN', 'Story Manager Branch Node', {
        members: [
            def('EDID'),
            subrecord('PNAM', ckFormId('Parent ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ])),
            subrecord('SNAM', ckFormId('Previous Sibling ', [
                'SMQN', 'SMBN', 'SMEN', 'NULL'
            ])),
            req(def('CITC')),
            def('CTDAsCount'),
            subrecord('DNAM', format(uint32('Flags'), def('SMNodeFlags'))),
            subrecord('XNAM', unknown())
        ]
    })
};