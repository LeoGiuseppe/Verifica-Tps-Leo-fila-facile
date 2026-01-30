let costo=0
let mod= Number(document.getElementById("modello auto"))
let numg=Number(document.getElementById("giorni"))
let prezzo=0
let costotot=document.getElementById("costotot")
let testo= prezzo.toString();
function f1(){
    if (mod==1){
        costo=30
        prezzo= numg*costo
        document.getElementById("costotot").textContent=testo
    }else if(mod==2){
           costo=60
           prezzo= numg*costo
       costotot.textContent= testo
    }else if(mod==3) {
          costo=90
           prezzo= numg*costo
        document.getElementById("costotot").textContent=testo
    }
    
}