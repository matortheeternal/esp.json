let {
    addDef, string, uint32, def, formId, 
    bytes, opts, union, uint16, struct
} = require('../helpers');

module.exports = () => {
    addDef('MainRecordHeader', struct('Record Header', [
        string('Signature', 4),
        uint32('Data Size', null),
        def('RecordFlags'),
        formId('FormID'),
        union('Version Control Info 1', [
            opts(bytes('Version Control Info 1', 4), {
                "toStr": "VCI1ToStrBeforeFO4"
            }),
            opts(bytes('Version Control Info 1', 4), {
                "toStr": "VCI1ToStrAfterFO4"
            })
        ]),
        uint16('Form Version', null),
        bytes('Version Control Info 2', 2)
    ]));
};