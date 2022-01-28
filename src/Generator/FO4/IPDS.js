let {
    def, ckFormId, sortKey, struct, subrecord, 
    sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('IPDS', 'Impact Data Set', {
        members: [
            def('EDID'),
            sorted(memberArray('Data', 
                subrecord('PNAM', sortKey([0], struct('', [
                    ckFormId('Material', ['MATT']),
                    ckFormId('Impact', ['IPCT'])
                ])))
            ))
        ]
    })
};