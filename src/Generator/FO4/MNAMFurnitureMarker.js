let {
    addDef, flags, uint32, format, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('MNAMFurnitureMarker', 
        subrecord('MNAM', format(uint32('Active Markers / Flags'), flags({
            0: 'Interaction Point 0',
            1: 'Interaction Point 1',
            2: 'Interaction Point 2',
            3: 'Interaction Point 3',
            4: 'Interaction Point 4',
            5: 'Interaction Point 5',
            6: 'Interaction Point 6',
            7: 'Interaction Point 7',
            8: 'Interaction Point 8',
            9: 'Interaction Point 9',
            10: 'Interaction Point 10',
            11: 'Interaction Point 11',
            12: 'Interaction Point 12',
            13: 'Interaction Point 13',
            14: 'Interaction Point 14',
            15: 'Interaction Point 15',
            16: 'Interaction Point 16',
            17: 'Interaction Point 17',
            18: 'Interaction Point 18',
            19: 'Interaction Point 19',
            20: 'Interaction Point 20',
            21: 'Interaction Point 21',
            22: 'Allow Awake Sound',
            23: 'Enter With Weapon Drawn',
            24: 'Play Anim When Full',
            25: 'Disables Activation',
            26: 'Is Perch',
            27: 'Must Exit to Talk',
            28: 'Use Static Avoid Node',
            29: 'Unknown 29',
            30: 'Has Model?',
            31: 'Unknown 31'
        })))
    );
};