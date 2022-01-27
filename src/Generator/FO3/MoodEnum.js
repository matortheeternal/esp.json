let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('MoodEnum', 
        enumeration({
            0: 'Neutral',
            1: 'Afraid',
            2: 'Annoyed',
            3: 'Cocky',
            4: 'Drugged',
            5: 'Pleasant',
            6: 'Angry',
            7: 'Sad'
        })
    );
};