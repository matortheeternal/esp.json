let {
    req, def, uint32, sorted, array, 
    subrecord, float, int32, struct, record
} = require('../helpers');

module.exports = () => {
    record('TREE', 'Tree', {
        members: [
            req(def('EDID')),
            req(def('OBND')),
            req(def('MODL')),
            req(def('ICON')),
            def('DEST'),
            req(subrecord('SNAM', sorted(array('SpeedTree Seeds', 
                uint32('SpeedTree Seed')
            )))),
            req(subrecord('CNAM', struct('Tree Data', [
                float('Leaf Curvature'),
                float('Minimum Leaf Angle'),
                float('Maximum Leaf Angle'),
                float('Branch Dimming Value'),
                float('Leaf Dimming Value'),
                int32('Shadow Radius'),
                float('Rock Speed'),
                float('Rustle Speed')
            ]))),
            req(subrecord('BNAM', struct('Billboard Dimensions', [
                float('Width'),
                float('Height')
            ])))
        ]
    })
};