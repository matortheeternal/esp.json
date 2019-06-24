let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('AxisEnum', 
        enumeration({
            88: 'X',
            89: 'Y',
            90: 'Z'
        })
    );
};