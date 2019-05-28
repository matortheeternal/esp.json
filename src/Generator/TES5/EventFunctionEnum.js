let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('EventFunctionEnum', {
        "0": "GetIsID",
        "1": "IsInList",
        "2": "GetValue",
        "3": "HasKeyword",
        "4": "GetItemValue"
    });
};