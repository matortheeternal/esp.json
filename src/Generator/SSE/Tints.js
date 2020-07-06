let {
    addDef, subrecord, uint16, string, def, 
    format, ckFormId, memberStruct, memberArray, float
} = require('../helpers');

module.exports = () => {
    addDef('Tints', 
        memberArray('Tint Masks', 
            memberStruct('Tint Assets', [
                memberArray('Tint Layer', 
                    memberStruct('Texture', [
                        subrecord('TINI', uint16('Index')),
                        subrecord('TINT', string('File Name')),
                        subrecord('TINP', format(uint16('Mask Type'), def('TintMaskTypeEnum'))),
                        subrecord('TIND', ckFormId('Preset Default', ['CLFM', 'NULL']))
                    ])
                ),
                memberArray('Presets', 
                    memberStruct('Preset', [
                        subrecord('TINC', ckFormId('Color', ['CLFM', 'NULL'])),
                        subrecord('TINV', float('Default Value')),
                        subrecord('TIRS', uint16('Index'))
                    ])
                )
            ])
        )
    );
};