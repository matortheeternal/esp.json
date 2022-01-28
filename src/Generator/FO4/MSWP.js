let {
    flags, def, string, subrecord, float, 
    sortKey, memberStruct, sorted, memberArray, record
} = require('../helpers');

module.exports = () => {
    record('MSWP', 'Material Swap', {
        flags: flags({
            12: 'Ignored',
            16: 'Custom Swap'
        }),
        members: [
            def('EDID'),
            subrecord('FNAM', string('Tree Folder')),
            sorted(memberArray('Material Substitutions', 
                sortKey([0], memberStruct('Substitution', [
                    subrecord('BNAM', string('Original Material')),
                    subrecord('SNAM', string('Replacement Material')),
                    subrecord('FNAM', string('Tree Folder (obsolete)')),
                    subrecord('CNAM', float('Color Remapping Index'))
                ]))
            ))
        ]
    })
};