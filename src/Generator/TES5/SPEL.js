let {
    def, record
} = require('../helpers');

module.exports = () => {
    record('SPEL', 'Spell', {
        members: [
            def('EDID'),
            def('OBNDReq'),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            def('MDOB'),
            def('ETYP'),
            def('DESCReq'),
            def('SPIT'),
            def('EffectsReq')
        ]
    })
};