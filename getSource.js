function get_source(document_body, document){


    return document_body.innerText;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: get_source(document.body, document)
});

if(document.getElementById("findInCoupang")){
	document.getElementById("findInCoupang").remove();
} else {
	if(document.getElementsByClassName("loc") && document.getElementsByClassName("loc").length>0){
		document.getElementsByClassName("loc")[0].innerHTML += 
			"<span id='findInCoupang' style='padding-left:8px'><a href='http://coupang.com/'>쿠팡에선..?</a></span>";
	}
}


