let {
    addDef, bytes, size, subrecord, req, 
    memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('FaceGenNPC', 
        req(memberStruct('FaceGen Data', [
            req(subrecord('FGGS', size(0, bytes('FaceGen Geometry-Symmetric')))),
            req(subrecord('FGGA', size(0, bytes('FaceGen Geometry-Asymmetric')))),
            req(subrecord('FGTS', size(0, bytes('FaceGen Texture-Symmetric'))))
        ]))
    );
};