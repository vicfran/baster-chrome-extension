'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: "https://www.linkedin.com/in/" },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendBody(request.body)
    }
);

function sendBody(body) {
    console.log(body)
    var request = new XMLHttpRequest();
    request.open('POST', "http://localhost:8080/", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            if (request.status == 200) {
                alert(request.responseText);
            } else {
                alert("Error");
            }
        }
    }
    request.send(JSON.stringify({body: body}));
}