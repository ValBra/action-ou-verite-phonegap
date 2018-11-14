var ListeJoueurVue = (function()
{
    var pageListeJoueur = document.getElementById("page-liste-joueur").innerHTML;

    return function(listeJoueurDonnee)
    {
        this.afficher = function()
        {
            console.log("vue/ListeJoueurVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageListeJoueur;

            var listeJoueur = document.getElementById("liste-joueur");

            var li = "";
            for(var numeroJoueur in listeJoueurDonnee)
            {
                li += '<a class="list-group-item list-group-item-action" href="#joueur/' + numeroJoueur + '">' + listeJoueurDonnee[numeroJoueur].pseudo + "</a>";
            }
            listeJoueur.innerHTML = li;
        }
    };

})();