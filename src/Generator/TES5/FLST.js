let {
    string, subrecord, req, opts, formId, 
    sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('FLST', 'FormID List', {
        members: [
            opts(req(subrecord('EDID', string('Editor ID'))), {
                "afterSet": "FLSTEDIDAfterSet"
            }),
            sorted(memberArray('FormIDs', 
                subrecord('LNAM', formId('FormID'))
            ))
        ]
    })
};