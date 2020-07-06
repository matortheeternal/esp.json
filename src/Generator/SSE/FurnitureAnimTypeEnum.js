let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('FurnitureAnimTypeEnum', 
        enumeration({
            0: '',
            1: 'Sit',
            2: 'Lay',
            3: '',
            4: 'Lean'
        })
    );
};