let {
    addDef, subrecord, bytes, def, struct, 
    multiStruct
} = require('../helpers');

module.exports = () => {
    addDef('Morphs', multiStruct(Available Morphs, [
        subrecord('MPAI', bytes('Unknown', 0)),
        subrecord('MPAV', struct('Nose Variants', [
            def('NoseMorphFlags'),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4)
        ])),
        subrecord('MPAI', bytes('Unknown', 0)),
        subrecord('MPAV', struct('Brow Variants', [
            def('BrowMorphFlags'),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4)
        ])),
        subrecord('MPAI', bytes('Unknown', 0)),
        subrecord('MPAV', struct('Eye Variants', [
            def('EyesMorphFlags01'),
            def('EyesMorphFlags02'),
            bytes('Unknown', 3),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4)
        ])),
        subrecord('MPAI', bytes('Unknown', 0)),
        subrecord('MPAV', struct('Lip Variants', [
            def('LipMorphFlags'),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4),
            bytes('Unknown', 4)
        ]))
    ]));
};