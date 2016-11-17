chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	console.debug("chrome.tabs.onUpdated.listener "+tab.url);
});

chrome.browserAction.onClicked.addListener(function(tab){

	//chrome.downloads.setShelfEnabled(false);
	//chrome.downloads.setShelfEnabled(true);

});

