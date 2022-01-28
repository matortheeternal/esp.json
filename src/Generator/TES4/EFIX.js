let {
    addDef, flags, uint32, format, float, 
    bytes, size, formId, mgefCode, ckFormId, 
    union, unknown, sortKey, struct, subrecord, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('EFIX', 
        req(subrecord('EFIX', sortKey([3], struct('', [
            format(uint32('Override Mask'), flags({
            
            })),
            format(uint32('Flags'), flags({
            
            })),
            float('Base Cost'),
            union('Param #2', 'EFIXParamDecider', [
                size(4, bytes('Param #2 - Unknown Type')),
                formId('Param #2 - FormID'),
                size(4, mgefCode('Param #2 - Magic Effect Code')),
                ckFormId('Param #2 - Actor Value', ['ACVA'])
            ]),
            unknown()
        ]))))
    );
};