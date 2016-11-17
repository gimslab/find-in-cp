showHide();

function showHide() {  
    var el = document.getElementsByClassName("lnb_container")[0];
    if( el && el.style.display == 'none')
        el.style.display = 'block';
    else if( el )
        el.style.display = 'none';
}
