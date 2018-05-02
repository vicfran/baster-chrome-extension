var body = document.body.outerHTML;
chrome.runtime.sendMessage({body: body});