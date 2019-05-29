let {
    addDef, subrecord, bytes
} = require('../helpers');

module.exports = () => {
    addDef('TVDT', 
        subrecord('TVDT', bytes('Occlusion Data'))
    );
};