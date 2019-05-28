let path = require('path'),
    fs = require('fs'),
    {resolveType} = require('./parsers'),
    codeSnippet = require('./codeSnippet'),
    ParseError = require('./ParseError');

let wsExpr = /^[\s]+/,
    commentExpr = /^(\/\/[^\n]+|{[^}]+})/;

class Parser {
    constructor(filePath) {
        this.filename = path.basename(filePath);
        console.log(`Reading ${filePath}`);
        this.text = fs.readFileSync(filePath, { encoding: 'utf8' });
        if (!this.text) throw new Error(`Failed to read file ${filePath}.`);
        this.originalText = this.text;
        this.position = 0;
    }

    advance(numChars) {
        this.text = this.text.slice(numChars);
        this.position += numChars;
    }

    getCodeSnippet() {
        return codeSnippet(this.filename, this.originalText, this.position);
    }

    match(expr) {
        return this.text.match(expr);
    }

    next() {
        let match = this.text.match(wsExpr) ||
            this.text.match(commentExpr);
        if (!match) return;
        this.advance(match[0].length);
        this.next();
    }

    parseType(typeName, options = {}, skipAdvance = false) {
        let type = resolveType(typeName),
            match = type.test(this, options);
        if (!match) return;
        if (!skipAdvance && !type.skipAdvance)
            this.advance(match[0].length);
        return type.parse(match, this);
    }

    matchOne(typeNames) {
        for (let i = 0; i < typeNames.length; i++) {
            let type = typeNames[i],
                value = this.parseType(type);
            if (value !== undefined) return { type, value };
        }
    }

    matchArray(typeNames) {
        if (!this.chomp('[')) return;
        let entries = [];
        while (!this.chomp(']')) {
            let match = this.matchOne(typeNames);
            if (!match) throw new ParseError(`Expected ${typeNames}`);
            entries.push(match.value);
            this.next();
            this.chomp(',');
            this.next();
        }
        console.log(`Parsed array: ${entries}`);
        return entries;
    }

    startsWith(str) {
        let t = this.text.slice(0, str.length);
        return t.toLowerCase() === str.toLowerCase();
    }

    chomp(str) {
        if (!this.startsWith(str)) return false;
        this.advance(str.length);
        this.next();
        return true;
    }
}

module.exports = Parser;