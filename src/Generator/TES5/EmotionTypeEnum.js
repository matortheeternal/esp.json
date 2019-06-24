let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('EmotionTypeEnum', 
        enumeration({
            0: 'Neutral',
            1: 'Anger',
            2: 'Disgust',
            3: 'Fear',
            4: 'Sad',
            5: 'Happy',
            6: 'Surprise',
            7: 'Puzzled'
        })
    );
};