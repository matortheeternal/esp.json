module.exports = {
    type: 'boolean',
    name: 'allowUnordered',
    priority: -1,
    handle: (value, line, converter) => {
        if (!value) return line;
        converter.addRequires('unordered');
        return `unordered(${line})`;
    }
};
