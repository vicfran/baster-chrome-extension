var button = document.getElementById("button");

button.onclick = function() {
	chrome.tabs.executeScript(null, {file: "js/content-script.js"});
}