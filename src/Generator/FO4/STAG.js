let {
    def, ckFormId, string, struct, subrecord, 
    memberArray, record
} = require('../helpers');

module.exports = () => {
    record('STAG', 'Animation Sound Tag Set', {
        members: [
            def('EDID'),
            memberArray('Sounds', 
                subrecord('TNAM', struct('Sound', [
                    ckFormId('Sound', ['SNDR', 'NULL']),
                    string('Action')
                ]))
            )
        ]
    })
};