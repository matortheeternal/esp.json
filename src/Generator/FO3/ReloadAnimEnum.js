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
            255: 'None'
        })
    );
};