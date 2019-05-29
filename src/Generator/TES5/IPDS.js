let {
    def, ckFormId, subrecord, sortKey, struct, 
    arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('IPDS', 'Impact Data Set', {
        members: [
            def('EDID'),
            arrayOfSubrecord('Data', 
                subrecord('PNAM', sortKey([0], struct('', [
                    ckFormId('Material', ['MATT']),
                    ckFormId('Impact', ['IPCT'])
                ])))
            )
        ]
    })
};