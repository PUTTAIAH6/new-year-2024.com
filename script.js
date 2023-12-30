function shw() {
    var txt=document.getElementById("txt").value;

    if (txt==0) {
        alert("Hey Hey Prabhu Hey Hari Nam Krishna Jaganatha Prema Nandh, Hey Kya Hua")
    } else {
        document.getElementById("hd"). innerHTML=txt;

        document.getElementById("pr"). style.display="none";
        document.getElementById("pd"). style.display="block";
    }
}