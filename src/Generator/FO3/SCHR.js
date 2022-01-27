let {
    addDef, bytes, size, uint32, enumeration, 
    uint16, format, flags, struct, subrecord, 
    req
} = require('../helpers');

module.exports = () => {
    addDef('SCHR', 
        req(subrecord('SCHR', struct('Basic Script Data', [
            size(4, bytes('Unused')),
            uint32('RefCount'),
            uint32('CompiledSize'),
            uint32('VariableCount'),
            format(uint16('Type'), enumeration({
                0: 'Object',
                1: 'Quest',
                256: 'Effect'
            })),
            format(uint16('Flags'), flags({
                0: 'Enabled'
            }))
        ])))
    );
};