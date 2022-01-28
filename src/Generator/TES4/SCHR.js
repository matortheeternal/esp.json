let {
    addDef, bytes, size, uint32, enumeration, 
    format, struct, subrecord, memberUnion
} = require('../helpers');

module.exports = () => {
    addDef('SCHR', 
        memberUnion('Basic Script Data', [
            subrecord('SCHR', struct('Basic Script Data', [
                size(4, bytes('Unused')),
                uint32('RefCount'),
                uint32('CompiledSize'),
                uint32('VariableCount'),
                format(uint32('Type'), enumeration({
                    0: 'Object',
                    1: 'Quest',
                    256: 'Magic Effect'
                }))
            ])),
            subrecord('SCHD', struct('Basic Script Data', [
                size(4, bytes('Unused')),
                uint32('RefCount'),
                uint32('CompiledSize'),
                uint32('VariableCount'),
                format(uint32('Type'), enumeration({
                    0: 'Object',
                    1: 'Quest',
                    256: 'Magic Effect'
                })),
                bytes('Unknown')
            ]))
        ])
    );
};