# jsafer
```shell
npm install -g jsafer
```
## Security Obfuscation Examples
the cli tool enables various usages.<br>
The output is production-ready artifacts, that are created as "*<original_name>*.obfuscated.js"

#### Single File Obfuscation / Protection
```shell
% jsafer "simple_test.js"
- jsafer - Files to minify:  [ 'simple_test.js' ]
- jsafer -  Stage 1 - Obfuscation #1 is done
- jsafer - Stage 2 - Obfuscation #2 is done
- jsafer - Stage 3 - Minifying...
- jsafer - Stage 4 - Obfuscated And Minified:

var _0x50d8=["631792iiXlAT","73vmOeJA","1491FsqhOo",
"1akSToO","227pSAJBp","772838JDMXmH","ZgHGw","RGuPM",
....
(285)](r,n))return console[_0x2a32[0]](r),e[a(286)](fibo,n,t,e[a(278)](r,t))}fibo(1e3);

- jsafer - Stage 5 - Done.
```
#### Code Snippet Obfuscation
```shell
 % jsafer

No files were specified, getting code from prompt.

prompt: code: "let a=1, b=2; console.alert(1);'"
- jsafer - Command-line input received:
- jsafer -  Stage 1 - Obfuscation #1 is done
- jsafer - Stage 2 - Obfuscation #2 is done
- jsafer - Stage 3 - Minifying...
- jsafer - Stage 4 - Obfuscated And Minified:

var _0x9b94=["31691VFPYXl","15KxXWKQ","e.alert(1)","=2; 
... +_0x556a0e(121)+_0x556a0e(120)+";'"];jsafer,_0x57a5[0];

- jsafer - Stage 5 - Done.
```
#### Directory Obfuscation
```shell
% jsafer *.js

- jsafer - Files to minify:  [
  'obfuscate.js',
  'simple_test.js',
]

...
381)](t[x(381)](3994,9310),-13268)],((_,r)=>{const c=x,d=_0x2724;if(_)return void console[_0xb827[t[c(387)](t[c(387)](-7876,-8188),t[c(388)](1,16085))]](_);e[t[c(527)](d,411)](obfuscate,r,n)}))})));

- jsafer - Stage 5 - Done.
```