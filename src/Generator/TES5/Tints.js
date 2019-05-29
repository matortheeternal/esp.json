let {
    addDef, subrecord, uint16, cstring, def, 
    format, ckFormId, multiStruct, arrayOfSubrecord, float
} = require('../helpers');

module.exports = () => {
    addDef('Tints', 
        arrayOfSubrecord('Tint Masks', 
            multiStruct('Tint Assets', [
                arrayOfSubrecord('Tint Layer', 
                    multiStruct('Texture', [
                        subrecord('TINI', uint16('Index')),
                        subrecord('TINT', cstring('File Name')),
                        subrecord('TINP', format(uint16('Mask Type'), def('TintMaskTypeEnum'))),
                        subrecord('TIND', ckFormId('Preset Default', ['CLFM', 'NULL']))
                    ])
                ),
                arrayOfSubrecord('Presets', 
                    multiStruct('Preset', [
                        subrecord('TINC', ckFormId('Color', ['CLFM', 'NULL'])),
                        subrecord('TINV', float('Default Value')),
                        subrecord('TIRS', uint16('Index'))
                    ])
                )
            ])
        )
    );
};