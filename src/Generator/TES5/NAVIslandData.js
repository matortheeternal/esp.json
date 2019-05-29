let {
    addDef, float, int16, array, opts, 
    struct
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
            opts(array('Triangles', 
                struct('Triangle', [
                    opts(array('Vertices', 
                        int16('Vertex')
                    , 3), {
                        "includeFlag": "dfNotAlignable"
                    })
                ])
            , -1), {
                "includeFlag": "dfNotAlignable"
            }),
            opts(array('Vertices', 
                struct('Vertex', [
                    float('X'),
                    float('Y'),
                    float('Z')
                ])
            , -1), {
                "includeFlag": "dfNotAlignable"
            })
        ])
    );
};