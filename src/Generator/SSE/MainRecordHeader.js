let {
    addDef, string, size, uint32, def, 
    formId, bytes, union, uint16, struct
} = require('../helpers');

module.exports = () => {
    addDef('MainRecordHeader', 
        struct('Record Header', [
            size(4, string('Signature')),
            uint32('Data Size'),
            def('RecordFlags'),
            formId('FormID'),
            union('Version Control Info 1', 'FormVer44Decider', [
                size(4, bytes('Version Control Info 1')),
                size(4, bytes('Version Control Info 1'))
            ]),
            uint16('Form Version'),
            size(2, bytes('Version Control Info 2'))
        ])
    );
};