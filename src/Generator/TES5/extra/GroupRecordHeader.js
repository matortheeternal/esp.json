let {
    addDef, struct, uint32, bytes, size, int32
} = require('../../helpers');

module.exports = () => {
    addDef('GroupRecordHeader',
        struct('Group Header', [
            uint32('Group Size'),
            size(4, bytes('Label')),
            int32('Group Type'),
            size(4, bytes('Version Control Info')),
            uint32('Unknown')
        ])
    );
};
