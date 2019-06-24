let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('BipedObjectFlags', 
        flags({
            0: '30 - Head',
            1: '31 - Hair',
            2: '32 - Body',
            3: '33 - Hands',
            4: '34 - Forearms',
            5: '35 - Amulet',
            6: '36 - Ring',
            7: '37 - Feet',
            8: '38 - Calves',
            9: '39 - Shield',
            10: '40 - Tail',
            11: '41 - LongHair',
            12: '42 - Circlet',
            13: '43 - Ears',
            14: '44 - Unnamed',
            15: '45 - Unnamed',
            16: '46 - Unnamed',
            17: '47 - Unnamed',
            18: '48 - Unnamed',
            19: '49 - Unnamed',
            20: '50 - DecapitateHead',
            21: '51 - Decapitate',
            22: '52 - Unnamed',
            23: '53 - Unnamed',
            24: '54 - Unnamed',
            25: '55 - Unnamed',
            26: '56 - Unnamed',
            27: '57 - Unnamed',
            28: '58 - Unnamed',
            29: '59 - Unnamed',
            30: '60 - Unnamed',
            31: '61 - FX01'
        })
    );
};