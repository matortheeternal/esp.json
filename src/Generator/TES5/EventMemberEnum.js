let {
    addDef
} = require('../helpers');

module.exports = () => {
    addDef('EventMemberEnum', 
        {
            0: 'None',
            12614: 'Form',
            12619: 'Keyword',
            12620: '(Old)Location',
            12623: 'CreatedObject',
            12630: 'Value1',
            12876: '(New)Location',
            12886: 'Value2'
        }
    );
};