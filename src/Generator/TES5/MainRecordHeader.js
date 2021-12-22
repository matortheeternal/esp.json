let {
    addDef, string, size, conflictType, uint32, 
    def, formId, bytes, union, uint16, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('MainRecordHeader', 
        struct('Record Header', [
            conflictType('Critical', size(4, string('Signature'))),
            conflictType('Ignore', uint32('Data Size')),
            def('RecordFlags'),
            conflictType('FormID', formId('FormID')),
            union('Version Control Info 1', 'FormVer44Decider', [
                conflictType('Ignore', size(4, bytes('Version Control Info 1'))),
                conflictType('Ignore', size(4, bytes('Version Control Info 1')))
            ]),
            conflictType('Ignore', uint16('Form Version')),
            conflictType('Ignore', size(2, bytes('Version Control Info 2')))
        ])
    );
};