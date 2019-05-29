let {
    def, req, record
} = require('../helpers');

module.exports = () => {
    record('SPEL', 'Spell', {
        members: [
            def('EDID'),
            req(def('OBND')),
            def('FULL'),
            def('KSIZ'),
            def('KWDAs'),
            def('MDOB'),
            def('ETYP'),
            req(def('DESC')),
            def('SPIT'),
            req(def('Effects'))
        ]
    })
};