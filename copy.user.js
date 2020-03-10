// ==UserScript==
// @name          CopyButton
// @namespace     ForDevOps
// @description   This will create a button to copy text(like commit IDs) in a given anchor tag.  
// @author        mail@kamalbahadur.in
// @version       0.01
// @include       *kamalbahadur.in*
// @run-at        document-end
// @grant         none
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

var myButton = document.createElement("button");
myButton.innerHTML = "Click here to copy text"; 
document.body.appendChild(myButton);

myButton.onclick = function () {
    var copyText = document.getElementsByClassName("myClass")[0].text;
    window.alert("Text is :"+copyText);
    var dummy = $('<input>').val(copyText).appendTo('body').select();
    document.execCommand('copy');
    dummy.remove();
}
