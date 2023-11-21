
// chrome.tabs.sendMessage('ping')
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    console.log(tabs)
})