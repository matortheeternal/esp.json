let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('BlendModeEnum', 
        {
            0: '',
            1: 'Zero',
            2: 'One',
            3: 'Source Color',
            4: 'Source Inverse Color',
            5: 'Source Alpha',
            6: 'Source Inverted Alpha',
            7: 'Dest Alpha',
            8: 'Dest Inverted Alpha',
            9: 'Dest Color',
            10: 'Dest Inverse Color',
            11: 'Source Alpha SAT'
        }
    );
};