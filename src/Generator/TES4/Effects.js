let {
    addDef, def, memberStruct, uint8, struct, 
    format, bytes, size, subrecord, string, 
    memberArray, empty, req, memberUnion
} = require('../helpers');

module.exports = () => {
    addDef('Effects', 
        memberArray('Effects', 
            memberUnion('Effects', [
                memberStruct('Effect', [
                    def('EFID'),
                    def('EFIT'),
                    def('SCIT')
                ]),
                memberStruct('Effects', [
                    memberArray('Effects', 
                        memberStruct('Effect', [
                            subrecord('EFME', struct('Oblivion Magic Extender', [
                                uint8('Record Version'),
                                struct('OBME Version', [
                                    uint8('Beta'),
                                    uint8('Minor'),
                                    uint8('Major')
                                ]),
                                format(uint8('EFIT Param Info'), def('OBMEResolutionInfo')),
                                format(uint8('EFIX Param Info'), def('OBMEResolutionInfo')),
                                size(10, bytes('Unused'))
                            ])),
                            def('EFIDOBME'),
                            def('EFITOBME'),
                            def('SCITOBME'),
                            subrecord('EFII', string('Icon')),
                            def('EFIX')
                        ])
                    ),
                    req(subrecord('EFXX', empty('Effects End Marker'))),
                    req(def('FULL'))
                ])
            ])
        )
    );
};