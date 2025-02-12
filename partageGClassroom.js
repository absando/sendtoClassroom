
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url2 = tabs[0].url;
    var res = "https://classroom.google.com/share?url=" + url2
	chrome.windows.create({url:res, type: "popup", height: 450, width:800});
});
