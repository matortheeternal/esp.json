let {
    def, ckFormId, subrecord, sortKey, struct, 
    sorted, arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('IPDS', 'Impact Data Set', {
        members: [
            def('EDID'),
            sorted(arrayOfSubrecord('Data', 
                subrecord('PNAM', sortKey([0], struct('', [
                    ckFormId('Material', ['MATT']),
                    ckFormId('Impact', ['IPCT'])
                ])))
            ))
        ]
    })
};