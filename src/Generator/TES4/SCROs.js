let {
    addDef, formId, subrecord, uint32, memberUnion, 
    memberArray, opts
} = require('../helpers');

module.exports = () => {
    addDef('SCROs', 
        opts(memberArray('References', 
            memberUnion('', [
                subrecord('SCRO', formId('Global Reference')),
                subrecord('SCRV', uint32('Local Variable'))
            ])
        ), {
            "notAlignable": 1
        })
    );
};