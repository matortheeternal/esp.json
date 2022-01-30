# esp.json
JSON definitions for parsing Bethesda Plugin Files.

## schema
The definition schema is described in `schema.json` with a [JSON Schema](https://json-schema.org/).

You can use WebStorm or another tool which supports draft-07 JSON schema to validate definition file schema.  The schema was verified using WebStorm, so it is the recommended option.  The individual definition files use the `definitionEntrySchema.json` JSON schema file.

## usage
You can download built definition files from the `data` folder, the compiled definitions are the `<game>.json` files.  The subfolders with individual definition entries are present for human viewing, and should not be consumed by applications.

## plans

- Unimplemented argument handlers can be found in `src/Converter/args.js`.  I would like certain less-used options to be toggleable by generation flags.
- Update to latest xEdit version.  I don't know how many breaking changes they've made to their definition files in the last 2 years, hopefully not much.
- Add a function to "freeze" generator files.  At some point this project just needs to break off from the xEdit codebase entirely.  Now that we have the starting point future 'conversions' are much less necessary.
- Add some kind of metadata to distinguish between definitions that use UInt32 Form IDs and definitions that use String Form IDs (Morrowind).
- Convert Morrowind definitions
- Convert FO76 definitions

## building

```bash
# Clone the repo and its submodules, e.g.
git clone --recursive https://github.com/matortheeternal/esp.json
```

Building definitions embeds them with a build ID which is generated using the `BUILD_AUTHOR` environment variable (or `USER` if it is not present) and a hexadecimal unix second timestamp.

```bash
# On windows you can set your build author environment variable with:
setx BUILD_AUTHOR {author}
```

### Commands

```bash
# To convert and build all definitions run:
npm run convertAll && npm run buildAll

# To convert the xEdit definitions for a specific game run: 
npm run convert -- {game} {source?}

# To build definition data files for a specific game run:
npm run build -- {game}
```

Game argument options: SSE, TES5, TES4, FO4, FNV, FO3

Source argument: provide TES5 for SSE, otherwise omit.
