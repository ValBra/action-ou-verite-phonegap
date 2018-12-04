var JeuVue = (function()
{
    var listeType;
    var pageJeu = document.getElementById("page-jeu").innerHTML;

    return function(listeActionVeriteDonnee, type)
    {
        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageJeu;

            var position = 0;
            alert(type);

            for(var i in listeActionVeriteDonnee)
            {
                if(type == listeActionVeriteDonnee[i].type)
                {
                    alert(i);
                    alert(listeActionVeriteDonnee[i]);
                    listeType[position] = listeActionVeriteDonnee[i];
                    position++;
                }
            }

            if(type!= "rien")
            {
                var numeroRandom = Math.floor((Math.random() * listeType.length));

                var phraseRandom = listeType[numeroRandom]
                alert(phraseRandom);

            }

        }
    };

    return classe;
})()