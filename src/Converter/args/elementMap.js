module.exports = {
    type: 'array of number',
    name: 'elementMap',
    priority: 0,
    handle: (value, line, converter) => {
        if (!value || !value.length) return line;
        converter.addRequires('elementMap');
        return `elementMap(${value}, ${line})`;
    }
};
