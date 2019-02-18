let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('AdvanceActionEnum', 
        {
            '0': 'Normal Usage',
            '1': 'Power Attack',
            '2': 'Bash',
            '3': 'Lockpick Success',
            '4': 'Lockpick Broken',
        }
    );
};