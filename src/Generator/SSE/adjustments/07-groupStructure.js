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
    'NAVM', 'PGRD', 'LAND', 'REFR', 'PGRE', 'PMIS', 'ACRE',
    'ACHR', 'PARW', 'PBEA', 'PFLA', 'PCON', 'PBAR', 'PHZD'
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

module.exports = () => {
    let defs = getDefs();
    let groups = getGroupOrder();

    defs.cellChildGroup = cellChildGroup;

    for (let i = 0; i < groups.length; i++) {
        let signature = groups[i];
        let recDef = defs[signature];
        let children = groupChildren[signature];
        groups[i] = {
            signature,
            name: recDef.name
        };
        if (children) groups[i].children = children;
    }
};
