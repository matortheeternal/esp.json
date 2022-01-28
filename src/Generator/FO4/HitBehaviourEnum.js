let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('HitBehaviourEnum', 
        enumeration({
            0: 'Normal formula behaviour',
            1: 'Dismember only',
            2: 'Explode only',
            3: 'No dismember/explode'
        })
    );
};