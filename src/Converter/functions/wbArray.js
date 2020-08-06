let {subrecordAndField} = require('../converters'),
    {newLine} = require('../helpers'),
    args = require('../args');

let convertArray = function(args, converter) {
    converter.addRequires('array');
    return `array(${args.name}, ${newLine(args.element)})`;
};

// wbInterface.pas#2995
// Fixed count, after callbacks
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.count,             // aCount: Integer = 0
    args.afterLoad,         // aAfterLoad: TwbAfterLoadCallback = nil
    args.afterSet,          // aAfterSet: TwbAfterSetCallback = nil
    args.priority,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArray);

// wbInterface.pas#3007
// Fixed count, no after callbacks
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.count,             // aCount: Integer = 0
    args.priority,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArray);

// wbInterface.pas#3016
// Fixed count, afterLoad callback
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.count,             // aCount: Integer = 0
    args.afterLoad,         // aAfterLoad: TwbAfterLoadCallback = nil
    args.priority,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArray);

// wbInterface.pas#3026
// wbInterface.pas#3047
// Labels, no count callback
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.labels,            // aLabels: array of string
    args.priority,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArray);

// wbInterface.pas#3036
// wbInterface.pas#3056
// Labels, count callback
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.labels,            // aLabels: array of string
    args.countCallback,     // aCountCallback: TwbCountCallback
    args.priority,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArray);

// wbInterface.pas#3066
// Count callback, no labels
subrecordAndField('wbArray', [
    args.name,              // aName: string
    args.field,             // aElement: IwbValueDef
    args.countCallback,     // aCountCallback: TwbCountCallback
    args.priority,          // aPriority: TwbConflictPriority = cpNormal
    args.required,          // aRequired: Boolean = False
    args.dontShow,          // aDontShow: TwbDontShowCallback = nil
    args.getCP              // aGetCP: TwbGetConflictPriority = nil
], convertArray);
