let {loadFilesToDictionary} = require('../loader');

let extTypes = loadFilesToDictionary('Converter/args');

// TODO: implement these
let exSk = { type: 'array of number', name: 'exSk' };
let defaultNumber = { type: 'number', name: 'default' };
let digits = { type: 'mathExpr', name: 'digits' };
let afterLoad = {type: 'identifier', name: 'afterLoad'};
let dontShow = {type: 'identifier', name: 'dontShow'};
let normalizer = {type: 'identifier', name: 'normalizer'};
let addInfo = {type: 'identifier', name: 'addInfo'};
let isSorted = {type: 'identifier', name: 'isSorted'};
let getCP = {type: 'identifier', name: 'getCP'};
let isReference = {type: 'boolean', name: 'isReference'};
let matchSize = {type: 'boolean', name: 'matchSize'};
let optionalFromElement = {type: 'number', name: 'optionalFromElement'};
let labels = { type: 'array of string', name: 'labels' };

module.exports = {
    // primitives
    identifier: { type: 'identifier' },
    boolean: { type: 'boolean' },
    string: { type: 'string' },
    number: { type: 'number' },
    // base types
    name: { type: 'string', name: 'name' },
    sig: { type: 'signature', name: 'sig' },
    elementName: { type: 'string', name: 'elementName' },
    intType: { type: 'intType', name: 'intType' },
    decider: { type: 'identifier', name: 'decider' },
    nameExpr: { type: 'stringExpr', name: 'name' },
    field: { type: 'field', name: 'element' },
    member: { type: 'member', name: 'member' },
    fields: { type: 'array of field', name: 'fields' },
    members: { type: 'array of member', name: 'members' },
    signatures: { type: 'array of signature', name: 'signatures' },
    arrayOfFlags: { type: 'array of flags', name: 'flags' },
    path: { type: 'string', name: 'path' },
    arrayPath: { type: 'string', name: 'arrayPath' },
    sk: { type: 'array of number', name: 'sk' },
    flags: { type: 'flags', name: 'flags' },
    flagsFn: { type: 'function', id: 'wbFlags', name: 'flags' },
    flagsField: { type: 'flagsField', name: 'flags' },
    recordFlags: { type: 'function', name: 'flags' },
    enumFn: { type: 'function', id: 'wbEnum', name: 'options' },
    enum: { type: 'enum', name: 'options' },
    flagsToIgnore: { type: 'array of number', name: 'flagsToIgnore' },
    ctdaFunctions: { type: 'array of ctdaFunction', name: 'ctdaFunctions' },
    // extension types
    ...extTypes,
    // unimplemented extension types
    afterLoad, dontShow, getCP, digits, exSk, optionalFromElement, 
    normalizer, defaultNumber, isReference, matchSize, isSorted, 
    addInfo, labels
};
