let {
    def, subrecord, uint32, ckFormId, bytes, 
    float, array, struct, uint8, union, 
    int16, arrayOfSubrecord, record
} = require('../helpers');

module.exports = () => {
    record('NAVI', 'Navigation Mesh Info Map', {
        members: [
            def('EDID'),
            subrecord('NVER', uint32('Version')),
            arrayOfSubrecord('Navigation Map Infos', undefined),
            subrecord('NVPP', struct('Preferred Pathing', [
                array('NavMeshes', array('Set', ckFormId('', ['NAVM']), -1), -1),
                array('NavMesh Tree?', struct('', [
                    ckFormId('NavMesh', ['NAVM']),
                    uint32('Index/Node')
                ]), -1)
            ])),
            subrecord('NVSI', array('Unknown', ckFormId('Navigation Mesh', ['NAVM']), undefined))
        ]
    })
};