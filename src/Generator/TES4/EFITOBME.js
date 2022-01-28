let {
    addDef, mgefCode, size, uint32, enumeration, 
    format, bytes, formId, ckFormId, union, 
    sortKey, struct, subrecord, req
} = require('../helpers');

module.exports = () => {
    addDef('EFITOBME', 
        req(subrecord('EFIT', sortKey([4, 5], struct('', [
            size(4, mgefCode('Magic Effect Code')),
            uint32('Magnitude'),
            uint32('Area'),
            uint32('Duration'),
            format(uint32('Type'), enumeration({
                0: 'Self',
                1: 'Touch',
                2: 'Target'
            })),
            union('Param #1', 'EFITOBMEParamDecider', [
                size(4, bytes('Param #1 - Unknown Type')),
                formId('Param #1 - FormID'),
                size(4, mgefCode('Param #1 - Magic Effect Code')),
                ckFormId('Param #1 - Actor Value', ['ACVA'])
            ])
        ]))))
    );
};