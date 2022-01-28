let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('ReverbClassEnum', 
        enumeration({
            0: 'Default',
            1: 'Class A',
            2: 'Class B',
            3: 'Class C',
            4: 'Class D',
            5: 'Class E'
        })
    );
};