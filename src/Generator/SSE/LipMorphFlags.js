let {
    addDef, flags, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('LipMorphFlags', 
        format(uint32('Lip Morph Flags'), flags({
            0: 'LipType0',
            1: 'LipType1',
            2: 'LipType2',
            3: 'LipType3',
            4: 'LipType4',
            5: 'LipType5',
            6: 'LipType6',
            7: 'LipType7',
            8: 'LipType8',
            9: 'LipType9',
            10: 'LipType10',
            11: 'LipType11',
            12: 'LipType12',
            13: 'LipType13',
            14: 'LipType14',
            15: 'LipType15',
            16: 'LipType16',
            17: 'LipType17',
            18: 'LipType18',
            19: 'LipType19',
            20: 'LipType20',
            21: 'LipType21',
            22: 'LipType22',
            23: 'LipType23',
            24: 'LipType24',
            25: 'LipType25',
            26: 'LipType26',
            27: 'LipType27',
            28: 'LipType28',
            29: 'LipType29',
            30: 'LipType30',
            31: 'LipType31'
        }))
    );
};