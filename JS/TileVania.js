// Disable Right-Click Context Menu
window.onload = function ()
{
    document.addEventListener("contextmenu", function(e)
    {
        e.preventDefault();
    },false);

    document.addEventListener("keydown", function (e) 
    {

        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) 
        {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) 
        {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) 
        {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) 
        {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) 
        {
            disabledEvent(e);
        }
    }, false);
};

// Disable Inspector Menu
function disabledEvent(e) 
{
    if (e.stopPropagation) 
    {
        e.stopPropagation();
    } 
    else if (window.event) 
    {
        window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
}


function displayContactSection()
{
    window.location.href = "#footer";
}

function displayAboutSection()
{
    window.location.href = "#aboutSection";
}

function displayDownloadSection()
{
    window.location.href = "#downloadSection";
}

function contactWhatsApp()
{
    window.location.href = "https://wa.me/9881890683";
}

function contactMail()
{
    var str = 'mailto:';
    str += String.fromCharCode(109,97,105,108,116,111,58);
    // first part of the address
    str += String.fromCharCode(106,97,118,97,97,116,104,97,114,118,50,49);
    // the @ sign
    str += String.fromCharCode(64);
    // the domain part
    str += String.fromCharCode(103,109,97,105,108,46,99,111,109);
    window.location.href = str;
}
