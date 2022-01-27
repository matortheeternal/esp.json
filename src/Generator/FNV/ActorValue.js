let {
    addDef, def, int32, format
} = require('../helpers');

module.exports = () => {
    addDef('ActorValue', 
        format(int32('Actor Value'), def('ActorValueEnum'))
    );
};