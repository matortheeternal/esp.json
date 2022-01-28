let {
    addDef, enumeration
} = require('../helpers');

module.exports = () => {
    addDef('MusicEnum', 
        enumeration({
            0: 'Default',
            1: 'Public',
            2: 'Dungeon'
        })
    );
};