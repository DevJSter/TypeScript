currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/users/user/projects/project1/app.js]
var x = require('bar');

//// [/users/user/projects/project1/node_modules/bar/index.js]
export const x = 1

//// [/users/user/projects/project1/jsconfig.json]
{
  "compilerOptions": {
    "allowJs": true,
    "traceResolution": true
  }
}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/users/user/projects/project1/app.js"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Search path: /users/user/projects/project1
Info seq  [hh:mm:ss:mss] For info: /users/user/projects/project1/app.js :: Config file name: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /users/user/projects/project1/jsconfig.json : {
 "rootNames": [
  "/users/user/projects/project1/app.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "traceResolution": true,
  "configFilePath": "/users/user/projects/project1/jsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1 1 undefined Config: /users/user/projects/project1/jsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1 1 undefined Config: /users/user/projects/project1/jsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] ======== Resolving module 'bar' from '/users/user/projects/project1/app.js'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/project1/node_modules/@types' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/user/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/users/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Directory '/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] Loading module 'bar' from 'node_modules' folder, target file types: JavaScript.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.js' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar.jsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/users/user/projects/project1/node_modules/bar/index.js' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/users/user/projects/project1/node_modules/bar/index.js', result '/users/user/projects/project1/node_modules/bar/index.js'.
Info seq  [hh:mm:ss:mss] ======== Module name 'bar' was successfully resolved to '/users/user/projects/project1/node_modules/bar/index.js'. ========
Info seq  [hh:mm:ss:mss] Auto discovery for typings is enabled in project '/users/user/projects/project1/jsconfig.json'. Running extra resolution pass for module 'bar' using cache location '/users/user/projects/typings'.
Info seq  [hh:mm:ss:mss] Directory '/users/user/projects/typings/node_modules' does not exist, skipping all lookups in it.
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/node_modules/@types 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/users/user/projects/project1/node_modules/bar/index.js Text-1 "export const x = 1"
	/users/user/projects/project1/app.js SVC-1-0 "var x = require('bar');"


	node_modules/bar/index.js
	  Imported via 'bar' from file 'app.js'
	app.js
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Calculating unresolved imports list of program:: Files:: 2
Info seq  [hh:mm:ss:mss] New unresolvedImports for /users/user/projects/project1/node_modules/bar/index.js:: []
Info seq  [hh:mm:ss:mss] New unresolvedImports for /users/user/projects/project1/app.js:: ["bar"]
Info seq  [hh:mm:ss:mss] Calculating unresolved imports list of program:: Files:: 2 Done: ["bar"]
TI:: Creating typing installer

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}
/users/user/projects/node_modules: *new*
  {"pollingInterval":500}
/users/user/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/users/user/projects/project1/jsconfig.json: *new*
  {}

FsWatchesRecursive::
/users/user/projects/project1: *new*
  {}
/users/user/projects/project1/node_modules: *new*
  {}

TI:: [hh:mm:ss:mss] Global cache location '/users/user/projects/typings', safe file path '/safeList.json', types map path /typesMap.json
TI:: [hh:mm:ss:mss] Processing cache location '/users/user/projects/typings'
TI:: [hh:mm:ss:mss] Trying to find '/users/user/projects/typings/package.json'...
TI:: [hh:mm:ss:mss] Finished processing cache location '/users/user/projects/typings'
TI:: [hh:mm:ss:mss] Npm config file: /users/user/projects/typings/package.json
TI:: [hh:mm:ss:mss] Npm config file: '/users/user/projects/typings/package.json' is missing, creating new one...
TI:: [hh:mm:ss:mss] Updating types-registry npm package...
TI:: [hh:mm:ss:mss] npm install --ignore-scripts types-registry@latest
TI:: [hh:mm:ss:mss] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [/users/user/projects/typings/package.json]
{ "private": true }

//// [/users/user/projects/typings/node_modules/types-registry/index.json]
{
  "entries": {
    "bar": {
      "latest": "1.3.0",
      "ts2.0": "1.0.0",
      "ts2.1": "1.0.0",
      "ts2.2": "1.2.0",
      "ts2.3": "1.3.0",
      "ts2.4": "1.3.0",
      "ts2.5": "1.3.0",
      "ts2.6": "1.3.0",
      "ts2.7": "1.3.0"
    }
  }
}


TI:: [hh:mm:ss:mss] Got install request
    {
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "fileNames": [
        "/users/user/projects/project1/app.js"
      ],
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "traceResolution": true,
        "configFilePath": "/users/user/projects/project1/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "unresolvedImports": [
        "bar"
      ],
      "projectRootPath": "/users/user/projects/project1",
      "cachePath": "/users/user/projects/typings",
      "kind": "discover"
    }
TI:: [hh:mm:ss:mss] Request specifies cache path '/users/user/projects/typings', loading cached information...
TI:: [hh:mm:ss:mss] Processing cache location '/users/user/projects/typings'
TI:: [hh:mm:ss:mss] Cache location was already processed...
TI:: [hh:mm:ss:mss] Failed to load safelist from types map file '/typesMap.json'
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Searching for typing names in /users/user/projects/project1/node_modules; all files: []
TI:: [hh:mm:ss:mss]     Found package names: []
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: ["bar"]
TI:: [hh:mm:ss:mss] Finished typings discovery:
    {
      "cachedTypingPaths": [],
      "newTypingNames": [
        "bar"
      ],
      "filesToWatch": [
        "/users/user/projects/project1/bower_components",
        "/users/user/projects/project1/node_modules"
      ]
    }
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "action::watchTypingLocations",
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "files": [
        "/users/user/projects/project1/bower_components",
        "/users/user/projects/project1/node_modules"
      ]
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Installing typings ["bar"]
TI:: [hh:mm:ss:mss] Npm config file: /users/user/projects/typings/package.json
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "event::beginInstallTypes",
      "eventId": 1,
      "typingsInstallerVersion": "FakeVersion",
      "projectName": "/users/user/projects/project1/jsconfig.json"
    }
TI:: [hh:mm:ss:mss] #1 with arguments'[
  "@types/bar@tsFakeMajor.Minor"
]'.
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/users/user/projects/node_modules:
  {"pollingInterval":500}
/users/user/projects/node_modules/@types:
  {"pollingInterval":500}
/users/user/projects/project1/bower_components: *new*
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/users/user/projects/project1/jsconfig.json:
  {}

FsWatchesRecursive::
/users/user/projects/project1:
  {}
/users/user/projects/project1/node_modules:
  {}

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
1: /users/user/projects/project1/jsconfig.json
2: *ensureProjectForOpenFiles*
//// [/users/user/projects/project1/jsconfig.json]
{
  "compilerOptions": {
    "allowJs": true,
    "traceResolution": true
  },
  "typeAcquisition": {
    "enable": false
  }
}


Info seq  [hh:mm:ss:mss] Running: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Config: /users/user/projects/project1/jsconfig.json : {
 "rootNames": [
  "/users/user/projects/project1/app.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "traceResolution": true,
  "configFilePath": "/users/user/projects/project1/jsconfig.json"
 }
}
TI:: [hh:mm:ss:mss] Closing file watchers for project '/users/user/projects/project1/jsconfig.json'
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "action::watchTypingLocations",
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "files": []
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/bower_components 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/user/projects/project1/node_modules 1 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Closing file watchers for project '/users/user/projects/project1/jsconfig.json' - done.
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/users/user/projects/project1/node_modules/bar/index.js Text-1 "export const x = 1"
	/users/user/projects/project1/app.js SVC-1-0 "var x = require('bar');"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
After running Timeout callback:: count: 0

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/users/user/projects/node_modules:
  {"pollingInterval":500}
/users/user/projects/node_modules/@types:
  {"pollingInterval":500}
/users/user/projects/project1/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/users/user/projects/project1/bower_components:
  {"pollingInterval":500}

FsWatches::
/users/user/projects/project1/jsconfig.json:
  {}

FsWatchesRecursive::
/users/user/projects/project1:
  {}
/users/user/projects/project1/node_modules:
  {}

TI:: [hh:mm:ss:mss] #1 with arguments'[
  "@types/bar@tsFakeMajor.Minor"
]':: true
TI:: Before installWorker

TI:: After installWorker
//// [/users/user/projects/typings/node_modules/@types/bar/index.d.ts]
export const x = 1;


TI:: [hh:mm:ss:mss] Installed typings ["@types/bar@tsFakeMajor.Minor"]
TI:: [hh:mm:ss:mss] Installed typing files ["/users/user/projects/typings/node_modules/@types/bar/index.d.ts"]
TI:: [hh:mm:ss:mss] Sending response:
    {
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "traceResolution": true,
        "configFilePath": "/users/user/projects/project1/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typings": [
        "/users/user/projects/typings/node_modules/@types/bar/index.d.ts"
      ],
      "unresolvedImports": [
        "bar"
      ],
      "kind": "action::set"
    }
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "event::endInstallTypes",
      "eventId": 1,
      "projectName": "/users/user/projects/project1/jsconfig.json",
      "packagesToInstall": [
        "@types/bar@tsFakeMajor.Minor"
      ],
      "installSuccess": true,
      "typingsInstallerVersion": "FakeVersion"
    }
Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0

Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Scheduled: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /users/user/projects/project1/jsconfig.json 1:: WatchInfo: /users/user/projects/project1/jsconfig.json 2000 undefined Project: /users/user/projects/project1/jsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
3: /users/user/projects/project1/jsconfig.json
4: *ensureProjectForOpenFiles*
//// [/users/user/projects/project1/jsconfig.json]
{
  "compilerOptions": {
    "allowJs": true,
    "traceResolution": true
  }
}


Info seq  [hh:mm:ss:mss] Running: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Reloading configured project /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Config: /users/user/projects/project1/jsconfig.json : {
 "rootNames": [
  "/users/user/projects/project1/app.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "traceResolution": true,
  "configFilePath": "/users/user/projects/project1/jsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /users/user/projects/project1/jsconfig.json Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/users/user/projects/project1/node_modules/bar/index.js Text-1 "export const x = 1"
	/users/user/projects/project1/app.js SVC-1-0 "var x = require('bar');"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/users/user/projects/project1/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /users/user/projects/project1/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /users/user/projects/project1/jsconfig.json
After running Timeout callback:: count: 0

Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0

Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0
