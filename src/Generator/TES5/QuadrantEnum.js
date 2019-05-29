let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('QuadrantEnum', 
        {
            0: 'Bottom Left',
            1: 'Bottom Right',
            2: 'Top Left',
            3: 'Top Right'
        }
    );
};