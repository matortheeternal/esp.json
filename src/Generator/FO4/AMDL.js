let {
    def, float, uint32, struct, subrecord, 
    record
} = require('../helpers');

module.exports = () => {
    record('AMDL', 'Aim Model', {
        members: [
            def('EDID'),
            subrecord('DNAM', struct('Data', [
                float('Cone of Fire - Min Angle'),
                float('Cone of Fire - Max Angle'),
                float('Cone of Fire - Increase Per Shot'),
                float('Cone of Fire - Decrease Per Sec'),
                uint32('Cone of Fire - Decrease Delay MS'),
                float('Cone of Fire - Sneak Mult'),
                float('Recoil - Diminish Spring Force'),
                float('Recoil - Diminish Sights Mult'),
                float('Recoil - Max Per Shot'),
                float('Recoil - Min Per Shot'),
                float('Recoil - Hip Mult'),
                uint32('Runaway - Recoil Shots'),
                float('Recoil - Arc'),
                float('Recoil - Arc Rotate'),
                float('Cone of Fire - Iron Sights Mult'),
                float('Stability - Base Stability')
            ]))
        ]
    })
};