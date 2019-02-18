let {
    addDef, enumS32, def
} = require('../helpers');

module.exports = game => {
    addDef('ActorValue', 
        enumS32('Actor Value', def('ActorValueEnum')),
    );
};