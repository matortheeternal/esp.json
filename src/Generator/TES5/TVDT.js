let {
    addDef, subrecord, bytes, size
} = require('../helpers');

module.exports = () => {
    addDef('TVDT', 
        subrecord('TVDT', size(0, bytes('Occlusion Data')))
    );
};