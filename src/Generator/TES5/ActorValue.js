let {
    addDef, def, int32
} = require('../helpers');

module.exports = () => {
    addDef('ActorValue', int32('Actor Value', def('ActorValueEnum')));
};