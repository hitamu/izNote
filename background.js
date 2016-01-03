chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "index.html" });
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Quick save to izNote',
        id: 'default',
        contexts: ['selection']
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  save(info.selectionText, info.pageUrl);
});