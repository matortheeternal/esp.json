let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ZTestFuncEnum', 
        enumeration({
            0: '',
            1: '',
            2: '',
            3: 'Equal To',
            4: 'Normal',
            5: 'Greater Than',
            6: '',
            7: 'Greater Than or Equal Than',
            8: 'Always Show'
        })
    );
};