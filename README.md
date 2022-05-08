# jsafer
```shell
$ npm install -g jsafer
```
```shell
$ # Let's test the installation.
$ jsafer

No files were specified, getting code from prompt.

prompt: code:

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
➜  jsafer git:(main) ✗ jsafer ./simple_test.js
- jsafer - Files to minify:  [ './simple_test.js' ]
- jsafer -  Stage 0 - First obfuscation is done
- jsafer - Stage 0 - Second obfuscation is done
- jsafer -  Stage 1 - First obfuscation is done
- jsafer - Stage 1 - Second obfuscation is done
- jsafer -  Stage 2 - First obfuscation is done
- jsafer - Stage 2 - Second obfuscation is done
- jsafer -  Stage 3 - First obfuscation is done
- jsafer - Stage 3 - Second obfuscation is done
- jsafer -  Stage 4 - First obfuscation is done
- jsafer - Stage 4 - Second obfuscation is done
- jsafer -  Stage 5 - First obfuscation is done
- jsafer - Stage 5 - Second obfuscation is done
- jsafer -  Stage 6 - First obfuscation is done
- jsafer - Stage 6 - Second obfuscation is done
- jsafer -  Stage 7 - First obfuscation is done
- jsafer - Stage 7 - Second obfuscation is done
- jsafer -  Stage 8 - First obfuscation is done
- jsafer - Stage 8 - Second obfuscation is done
- jsafer -  Stage 9 - First obfuscation is done
- jsafer - Stage 9 - Second obfuscation is done
- jsafer - Stage 3 - Minifying...
- jsafer - Stage 4 - Obfuscated And Minified:

var _0x342e93=_0x1143;function _0x1143(e,r){var n=_0x35d0();return(_0x1143=function(e,r){return n[e-=302]})(e,r)}!function(e,r){for(var n=_0x1143,t=_0x35d0();;)try{if(520382===-parseInt(n(315))/1*(-parseInt(n(307))/2)+-parseInt(n(319))/3+parseInt(n(303))/4*(parseInt(n(305))/5)+parseInt(n(308))/6+parseInt(n(311))/7+-parseInt(n(309))/8+-parseInt(n(318))/9)break;t.push(t.shift())}catch(e){t.push(t.shift())}}();var _0x9875=[_0x342e93(316),_0x342e93(302),_0x342e93(312),_0x342e93(310)+_0x342e93(314),_0x342e93(313)+_0x342e93(304)];const{performance:performance}=require(_0x9875[0]);var startTime=performance[_0x9875[1]]();function fibo(e,r=1,n=1){var t=_0x342e93,o={vxBTI:function(e,r){return e>r},aEBwR:function(e,r,n,t){return e(r,n,t)},LHoLC:function(e,r){return e+r}};if(!o[t(306)](r,e))return console[_0x9875[2]](r),o[t(320)](fibo,e,n,o[t(317)](r,n))}function _0x35d0(){var e=["ok ","341sPqGdk","perf_hooks","LHoLC","11695428cDfJvU","516504tfDkFZ","aEBwR","now","284FEQHXZ","nds","890aKXUeK","vxBTI","4978Piqczx","5899530SGIBSd","732472GoaJsq","The run to","1672713PsAbHz","log"," milliseco"];return(_0x35d0=function(){return e})()}fibo(1/1e-9);var endTime=performance[_0x9875[1]]();console[_0x9875[2]](""+_0x9875[3]+(endTime-startTime)+_0x9875[4]);

- jsafer - Stage 5 - Done.
```
Check the obfuscated code:
```shell
➜  jsafer git:(main) ✗ node simple_test.obfuscated.js 
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
987
1597
2584
4181
6765
10946
17711
28657
46368
75025
121393
196418
317811
514229
832040
1346269
2178309
3524578
5702887
9227465
14930352
24157817
39088169
63245986
102334155
165580141
267914296
433494437
701408733
The run took 7.0212240014225245 milliseconds
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
