let {
    addDef, enumeration, uint8, format, bytes, 
    size, conflictType, union, def, uint16, 
    uint32, float, formId, sortKey, struct, 
    sorted, array, customCounter, elementCounter
} = require('../helpers');

module.exports = () => {
    addDef('ObjectModProperties', 
        elementCounter('Property Count', 
            customCounter('OMODDataPropertyCounter', 
                sorted(array('Properties', 
                    sortKey([4], struct('Property', [
                        format(uint8('Value Type'), enumeration({
                            0: 'Int',
                            1: 'Float',
                            2: 'Bool',
                            3: 'Unknown 3',
                            4: 'FormID,Int',
                            5: 'Enum',
                            6: 'FormID,Float'
                        })),
                        conflictType('Ignore', size(3, bytes('Unused'))),
                        union('Function Type', 'OMODDataFunctionTypeDecider', [
                            format(uint8('Function Type'), enumeration({
                                0: 'SET',
                                1: 'MUL+ADD',
                                2: 'ADD'
                            })),
                            format(uint8('Function Type'), enumeration({
                                0: 'SET',
                                1: 'AND',
                                2: 'OR'
                            })),
                            format(uint8('Function Type'), enumeration({
                                0: 'SET'
                            })),
                            format(uint8('Function Type'), enumeration({
                                0: 'SET',
                                1: 'REM',
                                2: 'ADD'
                            }))
                        ]),
                        conflictType('Ignore', size(3, bytes('Unused'))),
                        format(uint16('Property'), def('ObjectModPropertyToStr')),
                        conflictType('Ignore', size(2, bytes('Unused'))),
                        union('Value 1', 'OMODDataPropertyValue1Decider', [
                            size(4, bytes('Value 1 - Unknown')),
                            uint32('Value 1 - Int'),
                            float('Value 1 - Float'),
                            format(uint32('Value 1 - Bool'), def('BoolEnum')),
                            formId('Value 1 - FormID'),
                            uint32('Value 1 - Enum'),
                            format(uint32('Sound Level'), def('SoundLevelEnum')),
                            format(uint32('Stagger Value'), def('StaggerEnum')),
                            format(uint32('Hit Behaviour'), def('HitBehaviourEnum'))
                        ]),
                        union('Value 2', 'OMODDataPropertyValue2Decider', [
                            conflictType('Ignore', size(4, bytes('Unused'))),
                            uint32('Value 2 - Int'),
                            float('Value 2 - Float'),
                            format(uint32('Value 2 - Bool'), def('BoolEnum'))
                        ]),
                        float('Step')
                    ]))
                ))
            )
        )
    );
};