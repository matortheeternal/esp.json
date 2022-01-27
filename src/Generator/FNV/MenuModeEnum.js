let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('MenuModeEnum', 
        enumeration({
            1: 'Type: Character Interface',
            2: 'Type: Other',
            3: 'Type: Console',
            1001: 'Specific: Message',
            1002: 'Specific: Inventory',
            1003: 'Specific: Stats',
            1004: 'Specific: HUDMainMenu',
            1007: 'Specific: Loading',
            1008: 'Specific: Container',
            1009: 'Specific: Dialog',
            1012: 'Specific: Sleep/Wait',
            1013: 'Specific: Pause',
            1014: 'Specific: LockPick',
            1016: 'Specific: Quantity',
            1027: 'Specific: Level Up',
            1035: 'Specific: Pipboy Repair',
            1036: 'Specific: Race / Sex',
            1047: 'Specific: Credits',
            1048: 'Specific: CharGen',
            1051: 'Specific: TextEdit',
            1053: 'Specific: Barter',
            1054: 'Specific: Surgery',
            1055: 'Specific: Hacking',
            1056: 'Specific: VATS',
            1057: 'Specific: Computers',
            1058: 'Specific: Vendor Repair',
            1059: 'Specific: Tutorial',
            1060: 'Specific: You\'re SPECIAL book'
        })
    );
};