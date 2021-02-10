// recherche des tuile 
let aGrid = document.getElementsByClassName('fc-time-grid-event');

// écouteur d'evenement, l'ors d'un changement sur la page exécute la fonction main ()
if (aGrid[0]) {
    main ();
} else {
  new MutationObserver((mutations, observer) => {
    console.log(mutations);
    main ();
  }).observe(document, {childList: true, subtree: true});
}

/*
La fonction main permet de parcourir la collection des élèments présent dans aGrid
consulte pour chaque element la propriété TextContent
si la chaine de caracteres retourné match avec la regex alors l'element n'est pas supprimé
*/


function main () {
    for (let i = 0;i<aGrid.length;++i) 
    {
        chrome.storage.sync.get(['regex','activation'], function(result) {
            console.log(result.regex);
            const motif = new RegExp(result.regex); 
            console.log(motif);
            if (result.activation == 'yes') {
              if(aGrid[i].textContent.replace(/(\r\n|\n|\r)/gm, "").match(motif))
              {
                console.log(aGrid[i]);
              }
              else aGrid[i].style.backgroundColor = 'black';
            }
        });
    }


}


