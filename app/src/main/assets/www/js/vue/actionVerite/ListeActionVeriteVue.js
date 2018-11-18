var ListeActionVeriteVue = (function()
{
    var pageListeActionVerite = document.getElementById("page-liste-actionVerite").innerHTML;

    return function(listeActionVeriteDonnee)
    {
        this.afficher = function()
        {
            console.log("vue/ListeActionVeriteVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageListeActionVerite;

            var listeActionVerite = document.getElementById("liste-actionVerite");

            var li="";
            for(var numeroActionVerite in listeActionVeriteDonnee)
            {
                li += '<a class="list-group-item list-group-item-action ' + listeActionVeriteDonnee[numeroActionVerite].type + '" href="#actionVerite/' + numeroActionVerite + '">' + listeActionVeriteDonnee[numeroActionVerite].phrase + '</a>';
            }
            listeActionVerite.innerHTML = li;
        }
    };

})();
