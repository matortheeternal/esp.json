let {
    addDef, flags, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('RecordFlags', 
        format(uint32('Record Flags'), flags({
            0: 'ESM',
            1: '',
            2: '',
            3: '',
            4: '',
            5: 'Deleted',
            6: 'Border Region / Actor Value',
            7: 'Turn Off Fire / Actor Value',
            8: '',
            9: 'Casts shadows',
            10: 'Quest item / Persistent reference / Show in Menu',
            11: 'Initially disabled',
            12: 'Ignored',
            13: '',
            14: '',
            15: 'Visible when distant',
            16: '',
            17: 'Dangerous / Off limits (Interior cell)',
            18: 'Compressed ',
            19: 'Can\'t wait'
        }))
    );
};