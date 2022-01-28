let {
    addDef, string, size, conflictType, uint32, 
    def, formId, bytes, struct
} = require('../helpers');

module.exports = () => {
    addDef('MainRecordHeader', 
        struct('Record Header', [
            conflictType('Critical', size(4, string('Signature'))),
            conflictType('Ignore', uint32('Data Size')),
            def('RecordFlags'),
            conflictType('FormID', formId('FormID')),
            conflictType('Ignore', size(4, bytes('Version Control Info')))
        ])
    );
};