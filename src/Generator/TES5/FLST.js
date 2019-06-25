let {
    subrecord, string, req, formId, sorted, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('FLST', 'FormID List', {
        members: [
            req(subrecord('EDID', string('Editor ID'))),
            req(sorted(memberArray('FormIDs', 
                subrecord('LNAM', formId('FormID'))
            )))
        ]
    })
};