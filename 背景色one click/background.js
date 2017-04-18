chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='#006a66'"
  });
});
