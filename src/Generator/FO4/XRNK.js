let {
    addDef, int32, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('XRNK', 
        subrecord('XRNK', int32('Owner Faction Rank'))
    );
};