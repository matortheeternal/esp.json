let {
    addDef, uint32, conflictType, subrecord, empty, 
    def, req, memberStruct, unordered, memberArray, 
    elementCounter
} = require('../helpers');

module.exports = () => {
    addDef('ObjectTemplate', 
        memberStruct('Object Template', [
            subrecord('OBTE', conflictType('Benign', uint32('Count'))),
            elementCounter('OBTE - Count', 
                memberArray('Combinations', 
                    unordered(memberStruct('Combination', [
                        subrecord('OBTF', empty('Editor Only')),
                        def('FULL'),
                        req(def('OBTS'))
                    ]))
                )
            ),
            req(subrecord('STOP', empty('Marker')))
        ])
    );
};