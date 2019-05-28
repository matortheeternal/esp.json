let {
    def, ckFormId, subrecord, array, uint8, 
    arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('CPTH', 'Camera Path', {
        members: [
            def('EDID'),
            def('CTDAs'),
            subrecord('ANAM', array('Related Camera Paths', ckFormId('Related Camera Path', ['CPTH', 'NULL']))),
            subrecord('DATA', uint8('Camera Zoom', {
                "0": "Default, Must Have Camera Shots",
                "1": "Disable, Must Have Camera Shots",
                "2": "Shot List, Must Have Camera Shots",
                "128": "Default",
                "129": "Disable",
                "130": "Shot List"
            })),
            arrayOfSubrecord('Camera Shots', undefined)
        ]
    })
};