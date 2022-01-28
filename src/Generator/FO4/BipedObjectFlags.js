let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('BipedObjectFlags', 
        flags({
            0: '30 - Hair Top',
            1: '31 - Hair Long',
            2: '32 - FaceGen Head',
            3: '33 - BODY',
            4: '34 - L Hand',
            5: '35 - R Hand',
            6: '36 - [U] Torso',
            7: '37 - [U] L Arm',
            8: '38 - [U] R Arm',
            9: '39 - [U] L Leg',
            10: '40 - [U] R Leg',
            11: '41 - [A] Torso',
            12: '42 - [A] L Arm',
            13: '43 - [A] R Arm',
            14: '44 - [A] L Leg',
            15: '45 - [A] R Leg',
            16: '46 - Headband',
            17: '47 - Eyes',
            18: '48 - Beard',
            19: '49 - Mouth',
            20: '50 - Neck',
            21: '51 - Ring',
            22: '52 - Scalp',
            23: '53 - Decapitation',
            24: '54 - Unnamed',
            25: '55 - Unnamed',
            26: '56 - Unnamed',
            27: '57 - Unnamed',
            28: '58 - Unnamed',
            29: '59 - Shield',
            30: '60 - Pipboy',
            31: '61 - FX'
        })
    );
};