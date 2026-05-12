function fancify() {
    document.getElementById("userInput").style.fontSize = "4em";
}

function styleChange() {
    var textArea = document.getElementById("userInput");
    if (document.getElementById("fancy").checked) 
    {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }

    else if (document.getElementById("boring").checked) 
    {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    var textArea = document.getElementById("userInput");
    
    var text = textArea.value.toUpperCase();
   
    var parts = text.split(".");
   
    textArea.value = parts.join("-MOO.");
}