let {
    def, uint32, struct, subrecord, req, 
    ckFormId, array, record
} = require('../helpers');

module.exports = () => {
    record('FSTS', 'Footstep Set', {
        members: [
            def('EDID'),
            req(subrecord('XCNT', struct('Count', [
                uint32('Walk Forward Sets'),
                uint32('Run Forward Sets'),
                uint32('Walk Forward Alternate Sets'),
                uint32('Run Forward Alternate Sets'),
                uint32('Walk Forward Alternate 2 Sets')
            ]))),
            req(subrecord('DATA', array('Footstep Sets', 
                ckFormId('Footstep', ['FSTP'])
            )))
        ]
    })
};