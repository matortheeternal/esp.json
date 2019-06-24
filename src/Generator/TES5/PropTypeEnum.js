let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('PropTypeEnum', 
        enumeration({
            0: 'None',
            1: 'Object',
            2: 'String',
            3: 'Int32',
            4: 'Float',
            5: 'Bool',
            6: '',
            7: '',
            8: '',
            9: '',
            10: '',
            11: 'Array of Object',
            12: 'Array of String',
            13: 'Array of Int32',
            14: 'Array of Float',
            15: 'Array of Bool'
        })
    );
};