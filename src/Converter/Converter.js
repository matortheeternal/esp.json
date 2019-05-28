let path = require('path'),
    fs = require('fs'),
    Parser = require('./Parser'),
    {indent, lineBreak, tab} = require('./helpers'),
    {convertStatement} = require('./converters');

class Converter extends Parser {
    newOutput(filename) {
        console.log(`Creating ${filename}`);
        this.output = {
            filename: filename,
            requires: [],
            text: ''
        };
    }

    setOutputFolder(outputFolder) {
        this.outputFolder = outputFolder;
    }

    write(text) {
        this.output.text += text;
    }

    addRequires() {
        if (!this.output) throw new Error('Output not initialized.');
        for (let i = 0; i < arguments.length; i++) {
            let req = arguments[i];
            if (this.output.requires.includes(req)) return;
            this.output.requires.push(req);
        }
    }

    getExportArgs() {
        return this.output.requires.includes('IsSSE') ? 'game' : '()';
    }

    getRequiresText() {
        let {requires} = this.output;
        return requires.reduce((s, r, n) => {
            if (n % 5 === 0) s += n > 0 ? lineBreak + tab : tab;
            s += r;
            if (n < requires.length - 1) s += ', ';
            return s;
        }, '');
    }

    getOutputText() {
        return [
            `let {`,
            this.getRequiresText(),
            `} = require('../helpers');`,
            ``,
            `module.exports = ${this.getExportArgs()} => {`,
            indent(this.output.text),
            `};`
        ].join(lineBreak);
    }

    saveOutput() {
        let text = this.getOutputText(),
            filePath = path.resolve(this.outputFolder, this.output.filename);
        fs.writeFileSync(filePath, text);
    }

    convertRegions({start, end}) {
        let match;
        while (match = this.match(start)) {
            this.advance(match.index + match[0].length);
            this.next();
            while (!this.match(end))
                convertStatement(this);
        }
    }
}

module.exports = Converter;