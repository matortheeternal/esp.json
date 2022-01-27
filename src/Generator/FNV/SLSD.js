let {
    addDef, uint32, bytes, size, flags, 
    uint8, conflictType, format, sortKey, struct, 
    subrecord
} = require('../helpers');

module.exports = () => {
    addDef('SLSD', 
        subrecord('SLSD', sortKey([0], struct('Local Variable Data', [
            uint32('Index'),
            size(12, bytes('Unused')),
            format(conflictType('Critical', uint8('Flags')), flags({
                0: 'IsLongOrShort'
            })),
            size(7, bytes('Unused'))
        ])))
    );
};