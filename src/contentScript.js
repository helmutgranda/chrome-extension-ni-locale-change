

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log ("--- received");
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    //console.log ("THE GREETING");
    //console.log (request.greeting);
	//chrome.cookies.set({"url":"http://www.ni.com","name":"locale","value":"en-US","domain":".ni.com"});
    

    //console.log("page Refreshed");


    /* chrome.cookies.set({"name":"Sample1","url":"http://developer.chrome.com/extensions/cookies.html","value":"Dummy Data"},function (cookie){
        console.log(JSON.stringify(cookie));
        console.log(chrome.extension.lastError);
        console.log(chrome.runtime.lastError);
    });
    chrome.cookies.onChanged.addListener(function (changeInfo){
        console.log(JSON.stringify(changeInfo));
    });
*/
    window.location.reload();


    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });


/*


function startExtension() { console.log('Starting Extension'); }

function stopExtension() { console.log('Stopping Extension'); }
*/

/*
function onRequest(request, sender, sendResponse) {
    window.location.reload();
	console.log ("ON THE REQUEST");
    if (request.action == 'start')
        startExtension()
    else if (request.action == 'stop')
        stopExtension()
    sendResponse({});
}

chrome.extension.onRequest.addListener(onRequest);
*/