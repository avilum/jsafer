const jsObfuscator = require('js-obfuscator');
const JavaScriptObfuscator = require('javascript-obfuscator');
const minify = require('minify');
const prompt = require('prompt');
const fs = require('fs');
const path = require('path');

const obfuscateStep1Options = {
    keepLinefeeds: true,
    keepIndentations: true,
    encodeStrings: true,
    encodeNumbers: true,
    moveStrings: true,
    replaceNames: true,
    variableExclusions: ['^_get_', '^_set_', '^_mtd_']
};

const obfuscateStep2Options = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArrayThreshold: 1
};

const minifyOptions = {
    html: {
        removeAttributeQuotes: false,
    },
    css: {
        compatibility: '*',
    },
    js: {
        ecma: 5,
    },
    img: {
        maxSize: 4096,
    },
};

/* 
Optional configuration:
removeComments: true
removeCommentsFromCDATA: true
removeCDATASectionsFromCDATA: true
collapseWhitespace: true
collapseBooleanAttributes: true
removeAttributeQuotes: true
removeRedundantAttributes: true
useShortDoctype: true
removeEmptyAttributes: true
removeEmptyElements: false
removeOptionalTags: true
removeScriptTypeAttributes: true
removeStyleLinkTypeAttributes: true
minifyJS: true
minifyCSS: true 
*/



/*
Obsufcates and minified JS code using different libraries (chaining the outputs) to create a non-readable code, that is hard to understand with commercial decompilers.
The code is finally minified to keep network performance the same.
Good Luck!
*/
const obfuscate = (script, obfuscated_name) => {
    jsObfuscator(script, obfuscateStep1Options).then(function (obfuscated) {
        console.log("- jsafer -  Stage 1 - Obfuscation #1 is done");
        var obfuscationResult = JavaScriptObfuscator.obfuscate(
            obfuscated,
            obfuscateStep2Options
        );

        const step2Result = obfuscationResult.getObfuscatedCode();
        console.log("- jsafer - Stage 2 - Obfuscation #2 is done");
        console.log("- jsafer - Stage 3 - Minifying...")
        
        // Saving to file
        const newFileName = path.basename(obfuscated_name).replace(".js", ".obfuscated.js");
        fs.writeFileSync(newFileName, step2Result);
        minify(newFileName, minifyOptions)
            .then((minifiedCode) => {
                console.log("- jsafer - Stage 4 - Obfuscated And Minified:")
                console.log()
                console.log(minifiedCode)
                console.log()
                console.log("- jsafer - Stage 5 - Done.")
                return minifiedCode;
            })
            .catch(console.error);
    }, function (err) {
        console.error(err);
    });

};

// Entrypoint
const runtimeArgs = process.argv.slice(2);
if (runtimeArgs.length == 0) {
    console.warn("No files were specified, getting code from prompt.")
    prompt.get(['code'], (err, result) => {
        if (err) {
            console.error(err);
            return
        }

        console.log('- jsafer - Command-line input received:');
        obfuscate(result.code, 'script.js');
    })
}
else {
    console.log('- jsafer - Files to minify: ', runtimeArgs);
    runtimeArgs.forEach(fileName => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return
            }
            const obfuscated = obfuscate(data, fileName);
            return
        })
    });
}