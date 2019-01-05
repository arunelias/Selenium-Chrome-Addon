'use strict';

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	details.requestHeaders.push({name: "Authorization",value: "Basic dXNlcjpwYXNzd2Q="});
	return {requestHeaders: details.requestHeaders};
	},
	{urls: ["<all_urls>"]},
	["blocking", "requestHeaders"]);
