let {
    addDef, float, int16, array, count, 
    opts, struct, prefix
} = require('../helpers');

module.exports = () => {
    addDef('NAVIslandData', 
        struct('Island Data', [
            float('Min X'),
            float('Min Y'),
            float('Min Z'),
            float('Max X'),
            float('Max Y'),
            float('Max Z'),
            opts(prefix(4, array('Triangles', 
                struct('Triangle', [
                    opts(count(3, array('Vertices', 
                        int16('Vertex')
                    )), {
                        "notAlignable": 1
                    })
                ])
            )), {
                "notAlignable": 1
            }),
            opts(prefix(4, array('Vertices', 
                struct('Vertex', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            )), {
                "notAlignable": 1
            })
        ])
    );
};