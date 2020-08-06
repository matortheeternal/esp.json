let {
    addDef, bytes, size, subrecord, def, 
    struct, memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('Morphs', 
        memberStruct('Available Morphs', [
            subrecord('MPAI', size(0, bytes('Unknown'))),
            subrecord('MPAV', struct('Nose Variants', [
                def('NoseMorphFlags'),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown'))
            ])),
            subrecord('MPAI', size(0, bytes('Unknown'))),
            subrecord('MPAV', struct('Brow Variants', [
                def('BrowMorphFlags'),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown'))
            ])),
            subrecord('MPAI', size(0, bytes('Unknown'))),
            subrecord('MPAV', struct('Eye Variants', [
                def('EyesMorphFlags01'),
                def('EyesMorphFlags02'),
                size(3, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown'))
            ])),
            subrecord('MPAI', size(0, bytes('Unknown'))),
            subrecord('MPAV', struct('Lip Variants', [
                def('LipMorphFlags'),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown')),
                size(4, bytes('Unknown'))
            ]))
        ])
    );
};