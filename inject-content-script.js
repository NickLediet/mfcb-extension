import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import jsStringEscape from 'js-string-escape'

const resolveDist = file => resolve('dist', file)
const readFile = file => jsStringEscape(
    readFileSync(file)
        .toString()
        .replace(/\/\*(\n|.)+\*\//, '')
    )

const fileTokens = {
    REPLACE_WITH_WC: 'REPLACE_WITH_WC',
    REPLACE_WITH_POLYFILL: 'REPLACE_WITH_POLYFILL',
    REPLACE_WITH_TEST: 'REPLACE_WITH_TEST'
}
const filePaths = {
    MBFC_INFOBAR: resolveDist('mbfc-infobar.js'),
    POLYFILL: resolveDist('polyfill-support.js'),
    TEST: resolveDist('test.js'),
    CONTENT_SCRIPT: resolveDist('index.js')
}
const contentScriptContents = readFileSync(filePaths.CONTENT_SCRIPT);

// Search and replace
const injectedContentScriptContents = contentScriptContents.toString()
    .replace(
        `!!!${fileTokens.REPLACE_WITH_POLYFILL}!!!`, 
        readFile(filePaths.POLYFILL)
    )
    .replace(
        `!!!${fileTokens.REPLACE_WITH_WC}!!!`, 
        readFile(filePaths.MBFC_INFOBAR)
    )
    .replace(
        `!!!${fileTokens.REPLACE_WITH_TEST}!!!`, 
        readFile(filePaths.TEST)
    )

writeFileSync(filePaths.CONTENT_SCRIPT, injectedContentScriptContents)