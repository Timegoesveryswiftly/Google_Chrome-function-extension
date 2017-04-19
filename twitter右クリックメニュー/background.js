chrome.contextMenus.create({
  "title": "「%s」を Twitter で検索",
  "type": "normal",
  "contexts": ["selection"],
  "onclick": function(info) {
    var url = 'https://twitter.com/search?q=' + encodeURIComponent(info.selectionText);
    chrome.tabs.create({
      url: url
    });
  }
});
