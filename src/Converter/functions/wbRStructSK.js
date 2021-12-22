let {functionConverter} = require('../converters'),
    args = require('../args');

functionConverter('wbRStructSK', [
    args.sk,                // aSortKey: array of integer
    args.name,              // aName: string
    args.members,           // aMembers: array of IwbRecordMemberDef
    args.signatures,        // aSkipSigs: TwbSignatures
    args.conflictType,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.allowUnordered,    // aAllowUnordered: Boolean = False
    args.afterLoad,         // aAfterLoad: TwbAfterLoadCallback = nil
    args.identifier,        // aAfterSet: TwbAfterSetCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], ({sk, name, members, required}, converter) => {
    converter.addRequires('sortKey', 'memberStruct');
    let structDef = `memberStruct(${name}, ${members})`;
    return `sortKey(${sk}, ${structDef})`;
});
