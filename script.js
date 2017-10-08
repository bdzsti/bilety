var sX, sY, doZaplaty=0;
function showCoords(event) {
     sX = event.clientX+10;
     sY = event.clientY - 5;
     //coords2 = "screen - X: " + sX + ", screen - Y: " + sY;
    
}

function wybor(){
    'use strict';  
    //var checkboxes = document.querySelectorAll("input[name=wybor]");
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function(){
        if(this.checked) {
            document.getElementById('cena').style.display = "block";
            document.getElementById('cena').style.top = sY+"px";
            document.getElementById('cena').style.left = sX+"px";
            
            if (document.getElementById('poziom').value == "parter") {
                document.querySelector('optgroup[label="balkon"]').style.display = 'none';
                document.querySelector('optgroup[label="parter"]').style.display = "block";
             } else {
                document.querySelector('optgroup[label="balkon"]').style.display = "block";
                document.querySelector('optgroup[label="parter"]').style.display = 'none';
             }
        } else {
            document.getElementById('wynik').innerHTML += "wylaczony " + i +" - " + this.id + "<br />";
            document.getElementById('cena').style.display = "none";
        }
    });
  }
    document.getElementById('cena').addEventListener('change', function(){
        document.getElementById('cena').style.display = "none";
        doZaplaty += parseInt(document.getElementById('cena').value);
        document.getElementById('cena').value = "";
        document.getElementById('wynik').innerHTML += "<br> Do zapłaty: " + doZaplaty + " zł <br>";
        var checkbox = document.querySelectorAll('input[type=checkbox]');
        for (var i = 0; i < checkboxes.length; i++) {
           if( checkbox[i].checked){
               checkbox[i].disabled = "true";
           }
        } 
    });
}


window.onload = wybor;