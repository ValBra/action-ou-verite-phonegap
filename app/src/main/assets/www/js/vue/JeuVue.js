var JeuVue = (function(){

    var pageJeu = document.getElementById("page-jeu").innerHTML;

    classe = function()
    {

        this.afficher = function(listeActionVeriteDonnee)
        {
            document.getElementsByTagName("body")[0].innerHTML = pageJeu;

            for(var numeroActionVerite in listeActionVeriteDonnee)
            {
                var phraseRandom = Math.floor((Math.random() * listeActionVeriteDonnee.length;));
                alert(phraseRandom);
            }

        }
    };

    return classe;
})()