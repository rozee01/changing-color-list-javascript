// les elements a manipuler dans le fichier js

const x=document.getElementById("a");
const y=document.getElementById("b");
const z=document.getElementById("c");
const t=document.getElementById("d");
const tab=document.querySelector("ol");
//les event listener qui vont declencher les changements
tab.addEventListener("click",function(e){change(e.target)});

//fonction qui change la couleur 

function change(e){
    e.style.backgroundColor=generateColor();
}

// fonction qui genere une couleur aleatoirement
/**
 * 
 * @returns 
 */
function generateColor(){

    // la couleur qui a la plus grande valeure
    let maxVal = 0xFFFFFF; // 16777215
    //un réel aléatoire entre 0 et max val
    let randomNumber = Math.random() * maxVal;
    //l'arrondissement de ce réel
    randomNumber = Math.floor(randomNumber);
    //convertissement de ce nbre de base 16 en chaine 
    randomNumber = randomNumber.toString(16);
    //remplir la chaine en 0 si sa longueure est inférieure à 6
    let randColor = randomNumber.padStart(6, 0);   
    //retourner la chaine de référence du couleur
    return `#${randColor.toUpperCase()}`
}