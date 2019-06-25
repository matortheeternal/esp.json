let {
    addDef, flags, uint32, format
} = require('../helpers');

module.exports = () => {
    addDef('RACE_DATAFlags01', 
        format(uint32('Flags'), flags({
            0: 'Playable',
            1: 'FaceGen Head',
            2: 'Child',
            3: 'Tilt Front/Back',
            4: 'Tilt Left/Right',
            5: 'No Shadow',
            6: 'Swims',
            7: 'Flies',
            8: 'Walks',
            9: 'Immobile',
            10: 'Not Pushable',
            11: 'No Combat In Water',
            12: 'No Rotating to Head-Track',
            13: 'Don\'t Show Blood Spray',
            14: 'Don\'t Show Blood Decal',
            15: 'Uses Head Track Anims',
            16: 'Spells Align w/Magic Node',
            17: 'Use World Raycasts For FootIK',
            18: 'Allow Ragdoll Collision',
            19: 'Regen HP In Combat',
            20: 'Can\'t Open Doors',
            21: 'Allow PC Dialogue',
            22: 'No Knockdowns',
            23: 'Allow Pickpocket',
            24: 'Always Use Proxy Controller',
            25: 'Don\'t Show Weapon Blood',
            26: 'Overlay Head Part List',
            27: 'Override Head Part List',
            28: 'Can Pickup Items',
            29: 'Allow Multiple Membrane Shaders',
            30: 'Can Dual Wield',
            31: 'Avoids Roads'
        }))
    );
};