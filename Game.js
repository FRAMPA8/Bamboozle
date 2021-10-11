//zakladni promenne

document.querySelector(".hod").addEventListener("click",hodkostkou);

document.querySelector(".konectahu").addEventListener("click",konectahuhrace);

document.querySelector(".novahra").addEventListener("click",restart);


var celkoveskore1 = document.getElementById("celkoveskore1").textContent;

var celkoveskore2 = document.getElementById("celkoveskore2").textContent;

var aktualniskore1 = document.getElementById("aktualniskore1").textContent;

var aktualniskore2 = document.getElementById("aktualniskore2").textContent;

var aktivnihrac =1;

var pokracovatvehre;

celkoveskore1 = 0;
celkoveskore2 = 0;
aktualniskore1 = 0;
aktualniskore2 = 0;

document.querySelector("#cislo").style.display = "none";

zmenastylu();





//zvyrazneni aktivniho hrace

function zmenastylu(){
    
if (aktivnihrac===1){
    
document.querySelector(".hraccelkem1").style.border="4px solid yellow";
    
document.querySelector(".hracaktualne1").style.border="4px solid yellow";
    
document.querySelector(".hraccelkem2").style.border="3px solid black";
    
document.querySelector(".hracaktualne2").style.border="3px solid black";
}
    
else {
document.querySelector(".hraccelkem2").style.border="4px solid yellow";
    
document.querySelector(".hracaktualne2").style.border="4px solid yellow";
      
document.querySelector(".hraccelkem1").style.border="3px solid black";
    
document.querySelector(".hracaktualne1").style.border="3px solid black";
}

}





//stophry
function stophry (){
    
    pokracovatvehre = false;
}





//tah hrace

function hodkostkou(){
    
 if (pokracovatvehre!==false) {var hodnota = Math.ceil(Math.random()*6);
        
var obrazek = document.getElementById("cislo");
                
obrazek.src = "IMG/"+hodnota+".jpg";
        
obrazek.style.display = "block";

        
if (aktivnihrac===1){
        
        if (hodnota===1){
            
           celkoveskore2 += aktualniskore1;
            
           document.getElementById("celkoveskore2").innerHTML = celkoveskore2;   
           
           aktualniskore1 = 0; 
            
           document.getElementById("aktualniskore1").innerHTML = aktualniskore1;
                          
           dalsihrac();
            
           zmenastylu();
            
        }
    
       else{ aktualniskore1 += hodnota;
           document.getElementById("aktualniskore1").innerHTML = aktualniskore1;}
            
} 
    
else {
        if (hodnota===1){
           
           celkoveskore1 += aktualniskore2;
            
           document.getElementById("celkoveskore1").innerHTML = celkoveskore1;   
           
           aktualniskore2 = 0; 
            
           document.getElementById("aktualniskore2").innerHTML = aktualniskore2;
              
           dalsihrac();
            
           zmenastylu();
            
        }
       else{ aktualniskore2 += hodnota;
        
        document.getElementById("aktualniskore2").innerHTML = aktualniskore2;}
    
   }}  


}





//konec tahu

function konectahuhrace(){
    
if (pokracovatvehre!==false){
    
    if (aktivnihrac === 1) {
    
        celkoveskore1 += aktualniskore1;
    
        aktualniskore1 = 0;
    
    if (celkoveskore1<100){
        
        
        document.getElementById("celkoveskore1").innerHTML = celkoveskore1;
    
        
        document.getElementById("aktualniskore1").innerHTML = aktualniskore1;
    
        dalsihrac();
        zmenastylu(); }
    
    else { document.getElementById("celkoveskore1").innerHTML = "Hráč 1 je vítěz!!!";
        document.getElementById("aktualniskore1").innerHTML = "Hráč 1 je vítěz!!!";
        document.getElementById("jmeno1").innerHTML = "";
        document.getElementById("jmenoakt1").innerHTML = "";
        stophry();
        
          }
    } 
    
else {
    
        celkoveskore2 += aktualniskore2;
    
        aktualniskore2 = 0;
    
    if (celkoveskore2<100){
        
        
        document.getElementById("celkoveskore2").innerHTML = celkoveskore2;
    
        
        document.getElementById("aktualniskore2").innerHTML = aktualniskore2;
    
        dalsihrac();
        zmenastylu(); }
        else {  document.getElementById("celkoveskore2").innerHTML = "Hráč 2 je vítěz!!!";
        document.getElementById("aktualniskore2").innerHTML = "Hráč 2 je vítěz!!!";
        document.getElementById("jmeno2").innerHTML = "";
        document.getElementById("jmenoakt2").innerHTML = "";
        stophry();
             
             }
    } 
 }                
              
}




//prepinani hracu
 
function dalsihrac(){
    
if (aktivnihrac===1){
     
    if (celkoveskore2<100){
        
        aktivnihrac=2;} else {document.getElementById("celkoveskore2").innerHTML = "Hráč 2 je vítěz!!!";
        document.getElementById("aktualniskore2").innerHTML = "Hráč 2 je vítěz!!!";
        document.getElementById("jmeno2").innerHTML = "";
        document.getElementById("jmenoakt2").innerHTML = "";
        stophry();
                            }
    } 

else { if (celkoveskore1<100){
        
        aktivnihrac=1;} else {document.getElementById("celkoveskore1").innerHTML = "Hráč 1 je vítěz!!!";
        document.getElementById("aktualniskore1").innerHTML = "Hráč 1 je vítěz!!!";
        document.getElementById("jmeno1").innerHTML = "";
        document.getElementById("jmenoakt1").innerHTML = "";
        stophry();
          }
    } 
        
}






// reset hry

function restart (){

celkoveskore1 = 0;
document.getElementById("celkoveskore1").innerHTML = celkoveskore1;
    
celkoveskore2 = 0;
document.getElementById("celkoveskore2").innerHTML = celkoveskore2;
    
aktualniskore1 = 0;
document.getElementById("aktualniskore1").innerHTML = aktualniskore1;
    
aktualniskore2 = 0;
document.getElementById("aktualniskore2").innerHTML = aktualniskore2;

document.querySelector("#cislo").style.display = "none";
    
document.getElementById("jmeno1").innerHTML = "Celkové skóre hráče 1";
    
document.getElementById("jmenoakt1").innerHTML = "Aktuální skóre hráče 1";

document.getElementById("jmeno2").innerHTML = "Celkové skóre hráče 2";
    
document.getElementById("jmenoakt2").innerHTML = "Aktuální skóre hráče 2";      

aktivnihrac = 1;
zmenastylu();
    pokracovatvehre=true;

}


