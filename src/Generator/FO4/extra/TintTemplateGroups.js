let {
    flags, conflictType, def, subrecord, ckFormId,
    float, uint32, format, localized, struct,
    uint16, memberArray, enumeration, memberStruct,
    array, addDef, string, unknown
} = require('../../helpers');

module.exports = () => {
    addDef('TintTemplateGroups', {
        type: 'memberArray',
        member: memberStruct('Group', [
            subrecord('TTGP', conflictType('Translate',
                localized(string('Group Name'))
            )),
            memberArray('Options',
                memberStruct('Option', [
                    subrecord('TETI', struct('Index', [
                        format(uint16('Slot'), enumeration({
                            0: 'Forehead Mask',
                            1: 'Eyes Mask',
                            2: 'Nose Mask',
                            3: 'Ears Mask',
                            4: 'Cheeks Mask',
                            5: 'Mouth Mask',
                            6: 'Neck Mask',
                            7: 'Lip Color',
                            8: 'Cheek Color',
                            9: 'Eyeliner',
                            10: 'Eye Socket Upper',
                            11: 'Eye Socket Lower',
                            12: 'Skin Tone',
                            13: 'Paint',
                            14: 'Laugh Lines',
                            15: 'Cheek Color Lower',
                            16: 'Nose',
                            17: 'Chin',
                            18: 'Neck',
                            19: 'Forehead',
                            20: 'Dirt',
                            21: 'Scars',
                            22: 'Face Detail',
                            23: 'Brows',
                            24: 'Wrinkles',
                            25: 'Beards'
                        })),
                        uint16('Index')
                    ])),
                    subrecord('TTGP', conflictType('Translate',
                        localized(string('Name'))
                    )),
                    subrecord('TTEF', format(uint16('Flags'), flags({
                        0: 'On/Off only',
                        1: 'Chargen Detail',
                        2: 'Takes Skin Tone'
                    }))),
                    def('CTDAs'),
                    memberArray('Textures',
                        subrecord('TTET', string('Texture'))
                    ),
                    subrecord('TTEB', unknown()),
                    subrecord('TTEC', array('Template Colors',
                        struct('Template Color', [
                            ckFormId('Color', ['CLFM']),
                            float('Alpha'),
                            uint16('Template Index'),
                            format(uint32('Blend Operation'), enumeration({
                                0: 'Default',
                                1: 'Multiply',
                                2: 'Overlay',
                                3: 'Soft Light',
                                4: 'Hard Light'
                            }))
                        ])
                    )),
                    subrecord('TTED', float('Default'))
                ])
            ),
            subrecord('TTGE', uint32('Category Index'))
        ])
    });
};
