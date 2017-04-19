chrome.contextMenus.create({
  "title": "「%s」を Facebook で検索",
  "type": "normal",
  "contexts": ["selection"],
  "onclick": function(info) {
    var url = 'https://www.Facebook.com/search?q=' + encodeURIComponent(info.selectionText);
    chrome.tabs.create({
      url: url
    });
  }
});
