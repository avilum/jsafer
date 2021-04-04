# jsafer
```shell
$ # Let's obfuscate a fubonacii code. 
$ npm install -g jsafer
$ npm test jsafer

> jsafer@1.3.0 test
> node obfuscate.js "simple_test.js" && node simple_test.obfuscated.js "jsafer"

- jsafer - Files to minify:  [ 'simple_test.js' ]


function fibo(limit, a=1, b=1){
    // Some docstring about this function
    if(a > limit){
        return
    }
    console.log(a)
    return fibo(limit, b, a+b)
}

fibo(1000);

- jsafer -  Stage 1 - Obfuscation #1 is done
- jsafer - Stage 2 - Obfuscation #2 is done
- jsafer - Stage 3 - Minifying...
- jsafer - Stage 4 - Obfuscated And Minified:

var _0x49e6=["1zlSZGb","518807ylKatK","Qlakm","1155382sXYSWG","log","3085474vbXBWc","11seDYzl","46887RdaVcU","514116BeWIKX","987748FPAGmd","1177490DqkqIl","kFteY","VBurQ","2BAVaWb"],_0x7c2b=function(r,n){return _0x49e6[r-=190]},_0x2f68a6=_0x7c2b;!function(r,n){for(var t=_0x7c2b;;)try{if(715168===-parseInt(t(192))*-parseInt(t(193))+parseInt(t(201))+-parseInt(t(198))*parseInt(t(199))+-parseInt(t(202))+-parseInt(t(195))+parseInt(t(200))*-parseInt(t(191))+parseInt(t(197)))break;r.push(r.shift())}catch(n){r.push(r.shift())}}(_0x49e6);var _0x84f0=[_0x2f68a6(196)];function fibo(r,n=1,t=1){var e=_0x2f68a6,a={kFteY:function(r,n){return r>n},Qlakm:function(r,n,t,e){return r(n,t,e)},VBurQ:function(r,n){return r+n}};if(!a[e(203)](n,r))return console[_0x84f0[0]](n),a[e(194)](fibo,r,t,a[e(190)](n,t))}fibo(1e3);

- jsafer - Stage 5 - Done.
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
```
## Security Obfuscation Examples
The CLI tool enables various usages.<br>
Code of any size can be encapsulated with this technique, in a stable way. <br>
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
