let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('MiscStatEnum', 
        enumeration({
            0: 'Quests Completed',
            1: 'Locations Discovered',
            2: 'People Killed',
            3: 'Creatures Killed',
            4: 'Locks Picked',
            5: 'Computers Hacked',
            6: 'Stimpaks Taken',
            7: 'Rad-X Taken',
            8: 'RadAway Taken',
            9: 'Chems Taken',
            10: 'Times Addicted',
            11: 'Mines Disarmed',
            12: 'Speech Successes',
            13: 'Pockets Picked',
            14: 'Pants Exploded',
            15: 'Books Read',
            16: 'Bobbleheads Found',
            17: 'Weapons Created',
            18: 'People Mezzed',
            19: 'Captives Rescued',
            20: 'Sandman Kills',
            21: 'Paralyzing Punches',
            22: 'Robots Disabled',
            23: 'Contracts Completed',
            24: 'Corpses Eaten',
            25: 'Mysterious Stranger Visits',
            26: 'Doctor Bags Used',
            27: 'Challenges Completed',
            28: 'Miss Fortunate Occurrences',
            29: 'Disintegrations',
            30: 'Have Limbs Crippled',
            31: 'Speech Failures',
            32: 'Items Crafted',
            33: 'Weapon Modifications',
            34: 'Items Repaired',
            35: 'Total Things Killed',
            36: 'Dismembered Limbs',
            37: 'Caravan Games Won',
            38: 'Caravan Games Lost',
            39: 'Barter Amount Traded',
            40: 'Roulette Games Played',
            41: 'Blackjack Games Played',
            42: 'Slots Games Played'
        })
    );
};