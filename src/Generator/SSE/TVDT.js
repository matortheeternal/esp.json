let {
    addDef, bytes, size, subrecord
} = require('../helpers');

module.exports = () => {
    addDef('TVDT', 
        subrecord('TVDT', size(0, bytes('Occlusion Data')))
    );
};