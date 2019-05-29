let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('AxisEnum', 
        {
            88: 'X',
            89: 'Y',
            90: 'Z'
        }
    );
};