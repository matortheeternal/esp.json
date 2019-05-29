let {
    addDef, uint8, format
} = require('../helpers');

module.exports = () => {
    addDef('EyesMorphFlags02', 
        format(uint8('Eye Morph Flags 2'), {
            0: 'EyesType32',
            1: 'EyesType33',
            2: 'EyesType34',
            3: 'EyesType35',
            4: 'EyesType36',
            5: 'EyesType37',
            6: 'EyesType38'
        })
    );
};