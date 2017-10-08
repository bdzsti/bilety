var sX, sY, doZaplaty=0;
function showCoords(event) {
     sX = event.clientX+10;
     sY = event.clientY - 5;
     coords2 = "screen - X: " + sX + ", screen - Y: " + sY;
    
}

function wybor(){
    'use strict';  
    //var checkboxes = document.querySelectorAll("input[name=wybor]");
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function(){
        if(this.checked) {
            document.getElementById('wynik').innerHTML += "wlaczony " + i +" - " + this.id + "<br />";
            document.getElementById("wynik").innerHTML += coords2 + "<br>";
            document.getElementById('cena').style.display = "block";
            document.getElementById('cena').style.top = sY+"px";
            document.getElementById('cena').style.left = sX+"px";
            
            if (document.getElementById('poziom').value == "parter") {
                //document.getElementsByTagName("label").style.visibility = "hidden"; 
                
                document.querySelector('optgroup[label="balkon"]').style.display = 'none';
                document.querySelector('optgroup[label="parter"]').style.display = "block";
             } else {
                 document.querySelector('optgroup[label="parter"]').style.display = 'none';
                document.querySelector('optgroup[label="balkon"]').style.display = "block"; 
             }
        } else {
            document.getElementById('wynik').innerHTML += "wylaczony " + i +" - " + this.id + "<br />";
            document.getElementById('cena').style.display = "none";
        }
    });
  }
    document.getElementById('cena').addEventListener('change', function(){
        //document.getElementById('wynik').innerHTML += document.getElementById('cena').value + "<br />";
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
/*
function cena(){
    'use strict'; 
    document.getElementById('cen').addEventListener('change', function(){
        document.getElementById('wynik').innerHTML += document.getElementById('cen').value;
    }
                                                    
    );
    var cena = document.getElementsByClassName('cena');
    for (var i = 0; i < cena.length; i++) {
        cena[i].addEventListener('change', function(){
            if(this.selected){
               document.getElementById('wynik').innerHTML += this.value; 
            } else{
               document.getElementById('wynik').innerHTML += " nic "; 
            }
               
        });
    }

}
*/
window.onload = wybor;