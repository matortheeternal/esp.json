let {
    req, def, string, subrecord, bytes, 
    size, conflictType, memberArray, memberStruct, ckFormId, 
    record
} = require('../helpers');

module.exports = () => {
    record('BPTD', 'Body Part Data', {
        members: [
            req(def('EDID')),
            req(def('MODL')),
            req(memberArray('Body Parts', 
                memberStruct('Body Part', [
                    req(subrecord('BPTN', string('Part Name'))),
                    req(subrecord('BPNN', string('Part Node'))),
                    req(subrecord('BPNT', string('VATS Target'))),
                    req(subrecord('BPNI', string('IK Data - Start Node'))),
                    def('BPNDStruct'),
                    req(subrecord('NAM1', string('Limb Replacement Model'))),
                    req(subrecord('NAM4', string('Gore Effects - Target Bone'))),
                    subrecord('NAM5', conflictType('Ignore', size(0, bytes('Texture Files Hashes'))))
                ])
            )),
            subrecord('RAGA', ckFormId('Ragdoll', ['RGDL']))
        ]
    })
};