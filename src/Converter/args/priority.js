module.exports = {
    type: 'conflictPriority',
    name: 'priority',
    priority: 0,
    handle: (value, line, converter) => {
        if (value === 'Normal') return line;
        converter.addRequires('conflict');
        return `conflict('${value}', ${line})`;
    }
};
