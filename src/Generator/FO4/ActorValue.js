let {
    addDef, ckFormId
} = require('../helpers');

module.exports = () => {
    addDef('ActorValue', 
        ckFormId('Actor Value', ['AVIF', 'NULL'])
    );
};