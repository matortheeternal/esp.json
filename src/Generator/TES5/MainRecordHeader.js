let {
    addDef, string, size, conflict, uint32, 
    def, formId, bytes, union, uint16, 
    struct
} = require('../helpers');

module.exports = () => {
    addDef('MainRecordHeader', 
        struct('Record Header', [
            conflict('Critical', size(4, string('Signature'))),
            conflict('Ignore', uint32('Data Size')),
            def('RecordFlags'),
            conflict('FormID', formId('FormID')),
            union('Version Control Info 1', 'FormVer44Decider', [
                conflict('Ignore', size(4, bytes('Version Control Info 1'))),
                conflict('Ignore', size(4, bytes('Version Control Info 1')))
            ]),
            conflict('Ignore', uint16('Form Version')),
            conflict('Ignore', size(2, bytes('Version Control Info 2')))
        ])
    );
};