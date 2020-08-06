module.exports = {
    type: 'boolean',
    name: 'required',
    priority: -10,
    handle: (value, line, converter) => {
        if (!value) return line;
        converter.addRequires('req');
        return `req(${line})`;
    }
};
