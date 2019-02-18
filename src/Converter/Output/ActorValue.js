let {
    addDef, enumS32, ref
} = require('../helpers');

module.exports = () => {
    addDef('ActorValue', 
        enumS32('Actor Value', ref('ActorValueEnum')),
    );
};