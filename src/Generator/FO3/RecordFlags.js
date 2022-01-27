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
            4: 'Form initialized (Runtime only)',
            5: 'Deleted',
            6: 'Border Region / Has Tree LOD / Constant / Hidden From Local Map',
            7: 'Turn Off Fire',
            8: 'Inaccessible',
            9: 'Casts shadows / On Local Map / Motion Blur',
            10: 'Quest item / Persistent reference',
            11: 'Initially disabled',
            12: 'Ignored',
            13: 'No Voice Filter',
            14: 'Cannot Save (Runtime only)',
            15: 'Visible when distant',
            16: 'Random Anim Start / High Priority LOD',
            17: 'Dangerous / Off limits (Interior cell) / Radio Station (Talking Activator)',
            18: 'Compressed',
            19: 'Can\'t wait / Platform Specific Texture / Dead',
            20: 'Unknown 21',
            21: 'Load Started',
            22: 'Unknown 23',
            23: 'Unknown 24',
            24: 'Destructible (Runtime only)',
            25: 'Obstacle / No AI Acquire',
            26: 'NavMesh Generation - Filter',
            27: 'NavMesh Generation - Bounding Box',
            28: 'Non-Pipboy / Reflected by Auto Water',
            29: 'Child Can Use / Refracted by Auto Water',
            30: 'NavMesh Generation - Ground',
            31: 'Multibound'
        }))
    );
};