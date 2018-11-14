var ListeVeriteVue = (function()
{
    var pageListeVerite = document.getElementById("page-liste-verite").innerHTML;

    return function(listeVeriteDonnee)
    {
        this.afficher = function()
        {
            console.log("vue/ListeVeriteVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageListeVerite;

            var listeVerite = document.getElementById("liste-verite");

            var li="";
            for(var numeroVerite in listeVeriteDonnee)
            {
                li += '<a class="list-group-item list-group-item-action" href="#verite/' + numeroVerite + '">' + listeVeriteDonnee[numeroVerite].nom + "</a>";
            }
            listeVerite.innerHTML = li;
        }
    };

})();
