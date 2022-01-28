let {
    string, conflictType, subrecord, req, opts, 
    def, formId, sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('FLST', 'FormID List', {
        members: [
            opts(req(subrecord('EDID', conflictType('Benign', string('Editor ID')))), {
                "afterSet": "FLSTEDIDAfterSet"
            }),
            def('FULL'),
            sorted(memberArray('FormIDs', 
                subrecord('LNAM', formId('FormID'))
            ))
        ]
    })
};