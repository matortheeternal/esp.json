let {functionConverter} = require('../converters'),
    args = require('../args');

// wbDefinitionsFO4.pas#14149
functionConverter('wbFaceMorphs', [
    args.string
], (args, converter) => {
    converter.addRequires('def');
    let [name] = args.values,
        gender = name.startsWith('Male') ? 'Male' : 'Female';
    return `def('${gender}FaceMorphs')`
});
