var JeuVue = (function()
{
    var listeType = [];
    var pageJeu = document.getElementById("page-jeu").innerHTML;

    return function(listeActionVeriteDonnee, type)
    {
        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageJeu;

            var phraseActionVerite = document.getElementById("phrase");

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
                var numeroRandom = Math.floor((Math.random() * listeType.length));
                var phraseRandom = listeType[numeroRandom];

                phraseActionVerite.innerHTML = phraseRandom;
            }

        }
    };

    return classe;
})()