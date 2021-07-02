var captionLength = 0;
var caption = 'What follows is Lorem ipsum translated to English: But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences...';

function type() {
    let captionChar = caption.charAt(captionLength++);
    let paragraph = document.getElementById("typed");
    let text = document.createTextNode(captionChar);
    paragraph.appendChild(text);
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});