# esp.json
JSON definitions for parsing Bethesda Plugin Files.

## schema
The definition schema is described in `schema.json` with a [JSON Schema](https://json-schema.org/).

You can use WebStorm or another tool which supports draft-07 JSON schema to validate definition file schema.  The schema was verified using WebStorm, so it is the recommended option.  The individual definition files use the `definitionEntrySchema.json` JSON schema file.

## usage
You can download built definition files from the `data` folder, the compiled definitions are the `<game>.json` files.  The subfolders with individual definition entries are present for human viewing, and should not be consumed by applications.

## plans

- Unimplemented argument handlers can be found in `src/Converter/args.js`.  I would like certain less-used options to be toggleable by generation flags.
- Distribute definitions in a compressed format.  Either zip or gzip.  This allows for ~80% space savings, which seems worth it.
- Add some generation metadata to definition files.  I mainly want something that can server as versioning, maybe some combination of build author and build date.  A conventional semver could also be used but feels a fair bit more arbitrary.
- Update to latest xEdit version.  I don't know how many breaking changes they've made to their definition files in the last 2 years, hopefully not much.
- Add a function to "freeze" generator files.  At some point this project just needs to break off from the xEdit codebase entirely.  Now that we have the starting point future 'conversions' are much less necessary.

## building

Clone the repo and its submodules, e.g.
 
```
git clone --recursive https://github.com/matortheeternal/esp.json
```

### Commands

To convert the xEdit definitions to `src/Generator/{game}` run: 

```
npm run convert -- {game} {source?}
```

To build definition data files run:

```
npm run build -- {game}
```

Examples:
- `npm run convert -- FO4`
- `npm run build -- FO4`
- `npm run convert -- SSE TES5`
- `npm run build -- SSE`
- `npm run convert -- TES5`
- `npm run build -- TES5`
- `npm run convert -- TES4`
- `npm run build -- TES4`
- `npm run convert -- FO3`
- `npm run build -- FO3`
- `npm run convert -- FNV`
- `npm run build -- FNV`
