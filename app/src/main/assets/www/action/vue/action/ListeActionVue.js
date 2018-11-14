var ListeActionVue = (function()
{
    var pageListeAction = document.getElementById("page-liste-action").innerHTML;

    return function(listeActionDonnee)
    {
        this.afficher = function()
        {
            console.log("vue/ListeActionVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageListeAction;

            var listeAction = document.getElementById("liste-action");

            var li="";
            for(var numeroAction in listeActionDonnee)
            {
                li += '<a class="list-group-item list-group-item-action" href="#action/' + numeroAction + '">' + listeActionDonnee[numeroAction].nom + "</a>";
            }
            listeAction.innerHTML = li;
        }
    };

})();
