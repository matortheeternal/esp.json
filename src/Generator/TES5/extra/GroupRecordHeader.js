let {
    addDef, struct, uint32, bytes,
    inherit, size, string, int32
} = require('../../helpers');

module.exports = () => {
    addDef('GroupRecordHeader',
        struct('Group Header', [
            inherit('signature', size(4, string('Signature'))),
            uint32('Group Size'),
            size(4, bytes('Label')),
            int32('Group Type'),
            size(4, bytes('Version Control Info')),
            uint32('Unknown')
        ])
    );
};
