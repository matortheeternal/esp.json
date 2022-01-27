let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ReloadAnimEnum', 
        enumeration({
            0: 'ReloadA',
            1: 'ReloadB',
            2: 'ReloadC',
            3: 'ReloadD',
            4: 'ReloadE',
            5: 'ReloadF',
            6: 'ReloadG',
            7: 'ReloadH',
            8: 'ReloadI',
            9: 'ReloadJ',
            10: 'ReloadK',
            11: 'ReloadL',
            12: 'ReloadM',
            13: 'ReloadN',
            14: 'ReloadO',
            15: 'ReloadP',
            16: 'ReloadQ',
            17: 'ReloadR',
            18: 'ReloadS',
            19: 'ReloadW',
            20: 'ReloadX',
            21: 'ReloadY',
            22: 'ReloadZ',
            255: 'None'
        })
    );
};