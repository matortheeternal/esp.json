let {
    def, req, ckFormId, flags, uint32, 
    format, struct, subrecord, record
} = require('../helpers');

module.exports = () => {
    record('DUAL', 'Dual Cast Data', {
        members: [
            def('EDID'),
            req(def('OBND')),
            req(subrecord('DATA', struct('Data', [
                ckFormId('Projectile', ['PROJ', 'NULL']),
                ckFormId('Explosion', ['EXPL', 'NULL']),
                ckFormId('Effect Shader', ['EFSH', 'NULL']),
                ckFormId('Hit Effect Art', ['ARTO', 'NULL']),
                ckFormId('Impact Data Set', ['IPDS', 'NULL']),
                format(uint32('Inherit Scale'), flags({
                    0: 'Hit Effect Art',
                    1: 'Projectile',
                    2: 'Explosion'
                }))
            ])))
        ]
    })
};