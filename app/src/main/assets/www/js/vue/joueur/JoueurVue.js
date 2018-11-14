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

            joueurPseudo = document.getElementById("joueur-nom");
            joueurPseudo.innerHTML = joueur.pseudo;

            joueurScore = document.getElementById("cadeau-marque");
            joueurScore.innerHTML = joueur.score;

            joueurModifier = document.getElementById("joueur-modifier");
            lienModifier = '<a href="#modifier-joueur/' + joueur.id + '">Modifier le joueur</a>';
            joueurModifier.innerHTML = lienModifier;

        }
    };

    return classe;
})()
