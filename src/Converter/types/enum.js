let {typeConverter} = require('../../converter');

typeConverter('enum', {
    test: context => context.matchArray('number', 'string'),
    convert: match => {
        let options = {},
            max = match.entries.length - 1;
        for (let i = 0; i < max; i += 2)
            options[match.entries[i]] = match.entries[i + 1];
        return options;
    }
});