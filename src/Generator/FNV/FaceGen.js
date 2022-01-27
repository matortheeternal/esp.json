let {
    addDef, float, array, subrecord, req, 
    memberStruct
} = require('../helpers');

module.exports = () => {
    addDef('FaceGen', 
        req(memberStruct('FaceGen Data', [
            req(subrecord('FGGS', array('FaceGen Geometry-Symmetric', 
                float('Value')
            ))),
            req(subrecord('FGGA', array('FaceGen Geometry-Asymmetric', 
                float('Value')
            ))),
            req(subrecord('FGTS', array('FaceGen Texture-Symmetric', 
                float('Value')
            )))
        ]))
    );
};