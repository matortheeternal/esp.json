let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('FurnitureEntryTypeFlags', 
        {
            0: 'Front',
            1: 'Behind',
            2: 'Right',
            3: 'Left',
            4: 'Up'
        }
    );
};