let {
    req, def, flags, uint8, format, 
    subrecord, record
} = require('../helpers');

module.exports = () => {
    record('RCCT', 'Recipe Category', {
        members: [
            req(def('EDID')),
            def('FULL'),
            subrecord('DATA', format(uint8('Flags'), flags({
                0: 'Subcategory?',
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: '',
                7: ''
            })))
        ]
    })
};