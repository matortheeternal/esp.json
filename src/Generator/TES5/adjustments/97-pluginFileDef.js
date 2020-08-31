const {getGroupOrder, getDefs} = require('../../helpers');

let GroupType = {
    Top: 0,
    WorldChildren: 1,
    InteriorCellBlock: 2,
    InteriorCellSubBlock: 3,
    ExteriorCellBlock: 4,
    ExteriorCellSubBlock: 5,
    CellChildren: 6,
    TopicChildren: 7,
    CellPersistentChildren: 8,
    CellTemporaryChildren: 9
};

let group = (groupType, children) => ({
    type: 'group',
    groupType,
    children
});

let record = (id) => ({ id });

let cellChildRecords = [
    'NAVM', 'LAND', 'REFR', 'PGRE', 'PMIS', 'ACHR',
    'PARW', 'PBEA', 'PFLA', 'PCON', 'PBAR', 'PHZD'
].map(sig => record(sig));

let cellChildGroup = group(GroupType.CellChildren, [
    group(GroupType.CellPersistentChildren, cellChildRecords),
    group(GroupType.CellTemporaryChildren, cellChildRecords)
]);

let groupChildren = {
    WRLD: [
        record('WRLD'),
        group(GroupType.WorldChildren, [
            record('CELL'),
            { id: 'cellChildGroup' },
            group(GroupType.ExteriorCellBlock, [
                group(GroupType.ExteriorCellSubBlock, [
                    record('CELL'),
                    { id: 'cellChildGroup' }
                ])
            ])
        ])
    ],
    CELL: [
        group(GroupType.InteriorCellBlock, [
            group(GroupType.InteriorCellSubBlock, [
                record('CELL'),
                { id: 'cellChildGroup' }
            ])
        ])
    ],
    DIAL: [
        record('DIAL'),
        group(GroupType.TopicChildren, [
            record('INFO'),
        ])
    ]
};

let getGroupDefs = function() {
    return getGroupOrder().map(signature => {
        let children = groupChildren[signature];
        return {
            type: 'group',
            signature,
            ...(children && {children})
        };
    });
};

module.exports = () => {
    let defs = getDefs();

    defs.cellChildGroup = cellChildGroup;

    defs.PluginFile = {
        type: 'pluginFile',
        children: [
            record('TES4'),
            ...getGroupDefs()
        ]
    };
};
