var JeuVue = (function()
{
    var listeType = [];
    var pageJeu = document.getElementById("page-jeu").innerHTML;

    return function(listeActionVeriteDonnee, listeJoueurDonnee, type)
    {
        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageJeu;

            var phraseActionVerite = document.getElementById("phrase");
            var joueur = document.getElementById("nomJoueur");

            var position = 0;
            listeType = [];


            for(var i in listeActionVeriteDonnee)
            {
                if(type == listeActionVeriteDonnee[i].type)
                {
                    listeType[position] = [];
                    listeType[position] = listeActionVeriteDonnee[i].phrase;
                    position++;
                }
            }

            if(type != "rien")
            {
                var numeroPhrase = Math.floor((Math.random() * listeType.length));
                var phraseRandom = listeType[numeroPhrase];

                var numeroJoueur = Math.floor((Math.random() * listeJoueurDonnee.length));
                var joueurRandom = listeJoueurDonnee[numeroJoueur].pseudo;

                phraseActionVerite.innerHTML = phraseRandom;
                joueur.innerHTML = joueurRandom;
            }

        }
    };

    return classe;
})()