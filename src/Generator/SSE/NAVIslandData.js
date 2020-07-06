let {
    addDef, float, int16, array, size, 
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
                    opts(size(3, array('Vertices', 
                        int16('Vertex')
                    )), {
                        "includeFlag": "dfNotAlignable"
                    })
                ])
            )), {
                "includeFlag": "dfNotAlignable"
            }),
            opts(prefix(4, array('Vertices', 
                struct('Vertex', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            )), {
                "includeFlag": "dfNotAlignable"
            })
        ])
    );
};