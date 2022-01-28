let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('StaggerEnum', 
        enumeration({
            0: 'None',
            1: 'Small',
            2: 'Medium',
            3: 'Large',
            4: 'Extra Large'
        })
    );
};