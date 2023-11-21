// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }

// // chrome.runtime.onMessage.addListener(async () => {
// //     console.log(await getCurrentTab())
// // })

// (async () => {
//     console.log(await getCurrentTab())

// })()
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    console.log(tabs)
})