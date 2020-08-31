let {
    addMetaDef, struct, uint32, bytes,
    size, string, int32
} = require('../../helpers');

module.exports = () => {
    addMetaDef('GroupRecordHeader',
        struct('Group Header', [
            size(4, string('Signature')),
            uint32('Group Size'),
            size(4, bytes('Label')),
            int32('Group Type'),
            size(4, bytes('Version Control Info')),
            uint32('Unknown')
        ])
    );
};
