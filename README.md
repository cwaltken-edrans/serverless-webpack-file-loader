# Instructions

```zsh
$ yarn install

...


$ sls webpack invoke -f test
{ handler: './handler.js' }
Serverless: Bundling with Webpack...
Time: 2892ms
                                Asset      Size  Chunks             Chunk Names
59ca0efa9f5633cb0371bbc0355478d8.yaml  13 bytes          [emitted]  
                           handler.js   3.21 kB       0  [emitted]  main
   [0] ./handler.js 183 bytes {0} [built]
   [1] external "fs" 42 bytes {0} [not cacheable]
   [2] ./sample-file.yaml 83 bytes {0} [built]
Serverless: Run function test...
 
  Error --------------------------------------------------
 
  ENOENT: no such file or directory, open '59ca0efa9f5633cb0371bbc0355478d8.yaml'
 
     For debugging logs, run again after setting the "SLS_DEBUG=*" environment variable.
 
  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues
     Forums:        forum.serverless.com
     Chat:          gitter.im/serverless/serverless
 
  Your Environment Information -----------------------------
     OS:                     linux
     Node Version:           6.11.1
     Serverless Version:     1.19.0
 
```
