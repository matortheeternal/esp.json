let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('FurnitureAnimTypeEnum', 
        {
            0: '',
            1: 'Sit',
            2: 'Lay',
            3: '',
            4: 'Lean'
        }
    );
};