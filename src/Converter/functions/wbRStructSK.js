let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbRStructSK', [
    args.sk,                // aSortKey: array of integer
    args.name,              // aName: string
    args.members,           // aMembers: array of IwbRecordMemberDef
    args.signatures,        // aSkipSigs: TwbSignatures
    args.priority,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.identifier,        // aDontShow: TwbDontShowCallback = nil
    args.boolean,           // aAllowUnordered: Boolean = False
    args.identifier,        // aAfterLoad: TwbAfterLoadCallback = nil
    args.identifier,        // aAfterSet: TwbAfterSetCallback = nil
    args.identifier         // aGetCP: TwbGetConflictPriority = nil
], ({sk, name, members, required}, converter) => {
    converter.addRequires('sortKey', 'memberStruct');
    let structDef = `memberStruct(${name}, ${members})`;
    return `sortKey(${sk}, ${structDef})`;
});
