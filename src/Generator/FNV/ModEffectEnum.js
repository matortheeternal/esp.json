let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ModEffectEnum', 
        enumeration({
            0: 'None',
            1: 'Increase Weapon Damage',
            2: 'Increase Clip Capacity',
            3: 'Decrease Spread',
            4: 'Decrease Weight',
            5: 'Regenerate Ammo (shots)',
            6: 'Regenerate Ammo (seconds)',
            7: 'Decrease Equip Time',
            8: 'Increase Rate of Fire',
            9: 'Increase Projectile Speed',
            10: 'Increase Max. Condition',
            11: 'Silence',
            12: 'Split Beam',
            13: 'VATS Bonus',
            14: 'Increase Zoom',
            15: 'Decrease Equip Time',
            16: 'Suppressor'
        })
    );
};