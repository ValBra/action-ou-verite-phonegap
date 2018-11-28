var JoueurVue = (function(){

    var pageJoueur = document.getElementById("page-joueur").innerHTML;

    classe = function(joueur)
    {
        var joueurPseudo;
        var joueurScore;
        var joueurModifier

        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageJoueur;

            joueurPseudo = document.getElementById("joueur-pseudo");
            joueurPseudo.innerHTML = joueur.pseudo;

            joueurScore = document.getElementById("joueur-score");
            joueurScore.innerHTML = joueur.score;

             document.getElementById("lien-modifier-joueur").href = '#modifier-joueur/' + joueur.id;

        }
    };

    return classe;
})()
