currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/file1.ts]
let x = [1, 2];


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "openExternalProjects",
      "arguments": {
        "projects": [
          {
            "projectFileName": "/a/proj1.csproj",
            "rootFiles": [
              {
                "fileName": "/a/file1.ts"
              }
            ],
            "options": {}
          }
        ]
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] Loading global plugin myplugin
Info seq  [hh:mm:ss:mss] Enabling plugin myplugin from candidate paths: /a/lib/tsc.js/../../..
Info seq  [hh:mm:ss:mss] Loading myplugin from /a/lib/tsc.js/../../.. (resolved to /a/lib/tsc.js/../../../node_modules)
Info seq  [hh:mm:ss:mss] Plugin validation succeeded
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/file1.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /a/proj1.csproj
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/proj1.csproj WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /a/proj1.csproj Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/a/proj1.csproj' (External)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a/file1.ts Text-1 "let x = [1, 2];"


	file1.ts
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Calculating unresolved imports list of program:: Files:: 1
Info seq  [hh:mm:ss:mss] New unresolvedImports for /a/file1.ts:: []
Info seq  [hh:mm:ss:mss] Calculating unresolved imports list of program:: Files:: 1 Done: []
Info seq  [hh:mm:ss:mss] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/a/file1.ts: *new*
  {}

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "semanticDiagnosticsSync",
      "arguments": {
        "file": "/a/file1.ts",
        "projectFileName": "/a/proj1.csproj"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "response": [
        {
          "start": {
            "line": 1,
            "offset": 1
          },
          "end": {
            "line": 1,
            "offset": 4
          },
          "text": "Plugin diagnostic",
          "code": 9999,
          "category": "warning"
        }
      ],
      "responseRequired": true
    }
After request
