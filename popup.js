
// recherche des différents elements du DOM
const inputRegex = document.getElementById('regex');
const radioActiv = radiosActiv = document.getElementsByName('activation');
const ahidden = document.getElementById('clickhidden');
const phidden = document.getElementById('phidden')
var pair = true;
function activation () {
    for( e of radiosActiv)
    {
        if(e.checked == true) {
            return e.id;
        }
    }
    return undefined;
}


//Consulte la mémoire, pour charger les informations de la precedente session
chrome.storage.sync.get(['regex'], function(result) {
    document.getElementById('regex').value = result.regex;
});

chrome.storage.sync.get(['activation'], function(result) {
   document.getElementById(result.activation).checked = true;
});


// implémentation des écouteurs d'evenement pour enregistrer les changements

inputRegex.addEventListener('input',function(e){
    chrome.storage.sync.set({'regex': e.target.value});
    
});

radioActiv.forEach(element => {
    element.addEventListener('change',function(e) {
        console.log(e.target);
        chrome.storage.sync.set({'activation': activation()});
    })
});

ahidden.addEventListener("click",function (e) {
    if (pair) {
        phidden.style.display = 'inline';
        pair = false;
        console.log("tpair")
    }
    else  {
        phidden.style.display = 'none';
        pair = true;
        console.log("timpair")
    }
});
