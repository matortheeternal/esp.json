let {
    addDef, uint8, format
} = require('../helpers');

module.exports = () => {
    addDef('ScriptFlags', format(uint8('Flags'), {
        "0": "Local",
        "1": "Inherited",
        "2": "Removed",
        "3": "Inherited and Removed"
    }));
};