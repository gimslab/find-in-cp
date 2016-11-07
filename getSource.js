function get_source(document_body, document){

//	document.querySelector(".logo").innerText("ABCD");

    return document_body.innerText;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: get_source(document.body, document)
});
