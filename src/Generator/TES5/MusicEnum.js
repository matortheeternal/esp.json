let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('MusicEnum', {
        "0": "Default",
        "1": "Public",
        "2": "Dungeon"
    });
};