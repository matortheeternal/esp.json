let {
    def, uint32, struct, subrecord, req, 
    ckFormId, array, record
} = require('../helpers');

module.exports = () => {
    record('FSTS', 'Footstep Set', {
        members: [
            def('EDID'),
            req(subrecord('XCNT', struct('Count', [
                uint32('Walking'),
                uint32('Running'),
                uint32('Sprinting'),
                uint32('Sneaking'),
                uint32('Swimming')
            ]))),
            req(subrecord('DATA', array('Footstep Sets', 
                ckFormId('Footstep', ['FSTP'])
            )))
        ]
    })
};