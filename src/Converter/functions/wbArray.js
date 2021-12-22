let {subrecordAndField} = require('../converters'),
    {arr, newLine} = require('../helpers'),
    args = require('../args');

let convertToArray = function(args, converter) {
    converter.addRequires('array');
    return `array(${args.name}, ${newLine(args.element)})`;
};

let convertToStruct = function(args, converter) {
    converter.addRequires('struct');
    let fields = args.labels.map(label => {
        return args.element.replace(/'([\w\s]*)'/, () => label);
    });
    return `struct(${args.name}, ${arr(fields)})`;
};

let convertArrayLike = function(args, converter) {
    let hasLabels = args.labels && args.labels.length > 0;
    return hasLabels
        ? convertToStruct(args, converter)
        : convertToArray(args, converter);
};

// wbInterface.pas#2995
// Fixed count, after callbacks
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.count,             // aCount: Integer = 0
    args.afterLoad,         // aAfterLoad: TwbAfterLoadCallback = nil
    args.afterSet,          // aAfterSet: TwbAfterSetCallback = nil
    args.conflictType,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertToArray);

// wbInterface.pas#3007
// Fixed count, no after callbacks
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.count,             // aCount: Integer = 0
    args.conflictType,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertToArray);

// wbInterface.pas#3016
// Fixed count, afterLoad callback
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.count,             // aCount: Integer = 0
    args.afterLoad,         // aAfterLoad: TwbAfterLoadCallback = nil
    args.conflictType,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertToArray);

// wbInterface.pas#3026
// wbInterface.pas#3047
// Labels, no count callback
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.labels,            // aLabels: array of string
    args.conflictType,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArrayLike);

// wbInterface.pas#3036
// wbInterface.pas#3056
// Labels, count callback
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.labels,            // aLabels: array of string
    args.countCallback,     // aCountCallback: TwbCountCallback
    args.conflictType,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArrayLike);

// wbInterface.pas#3066
// Count callback, no labels
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.countCallback,     // aCountCallback: TwbCountCallback
    args.conflictType,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertToArray);
