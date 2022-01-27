let {
    addDef, flags
} = require('../helpers');

module.exports = () => {
    addDef('AggroRadiusFlags', 
        flags({
            0: 'Aggro Radius Behavior'
        })
    );
};