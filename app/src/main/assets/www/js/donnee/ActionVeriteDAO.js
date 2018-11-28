var ActionVeriteDAO = function()
{
    var listeActionVerite;
    var initialiser = function()
    {
        if(!listeActionVerite) listeActionVerite = [
            {"id":"0","phrase":"Copie la personne en face de toi pendant 1 tour","type":"Action","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"1","phrase":"Fais une déclaration d'amour à la personne en face de toi!","type":"Action","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"2","phrase":"Tiens la main de ton voisin de gauche pendant 5min","type":"Action","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"3","phrase":"On te bande les yeux et tu dois reconnaitre quelqu'un en le touchant","type":"Action","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"4","phrase":"Echange de tee-shirt avec la personne à ta droite","type":"Action","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"5","phrase":"Quelle est la chose la plus bizarre à propos de toi ?","type":"Vérité","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"6","phrase":"Si tu pouvais arrêter le temps, que ferais-tu ?","type":"Vérité","theme":"Classique","difficulte":"Normal","createur":"Développeurs" },
            {"id":"7","phrase":"Quelle est la chose la plus bizarre à propos de toi ?","type":"Vérité","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"8","phrase":"Y'a-t-il une chose que personne ne sait sur toi ?","type":"Vérité","theme":"Classique","difficulte":"Normal","createur":"Développeurs"},
            {"id":"9","phrase":"Quelle est ta blague préférée ?","type":"Vérité","theme":"Classique","difficulte":"Normal","createur":"Développeurs"}
        ];
    }

    this.lister = function()
    {
        console.log("donnee/ActionVeriteDAO : lister()");
        //console.log("lister->localStorage['actionVerite'] : " + localStorage['actionVerite']);
        if(localStorage['actionVerite'])
        {
            listeActionVerite = JSON.parse(localStorage['actionVerite']);
        }
        else
        {
            for(position in listeActionVerite)
            {
                var actionVerite = new ActionVerite(
                    listeActionVerite[position].phrase,
                    listeActionVerite[position].type,
                    listeActionVerite[position].theme,
                    listeActionVerite[position].difficulte,
                    listeActionVerite[position].createur,
                    listeActionVerite[position].id
                );
                listeActionVerite[position] = actionVerite;
            }
        }
        return listeActionVerite;
    }

    this.ajouter = function(actionVerite)
    {
        console.log("donnee/ActionVeriteDAO : ajouter(actionVerite)");
        // il faut ici attribuer un id au actionVerite
        if(listeActionVerite.length > 0) actionVerite.id = listeActionVerite[listeActionVerite.length-1].id + 1;
        else actionVerite.id = 0;

        listeActionVerite[actionVerite.id] = actionVerite;
        localStorage['actionVerite'] = JSON.stringify(listeActionVerite);
        //console.log(JSON.stringify(listeActionVerite));

    }

    this.modifier = function(actionVerite)
    {
        console.log("donnee/ActionDAO : modifier(actionVerite)");
        
        listeActionVerite[actionVerite.id] = actionVerite;
        localStorage['actionVerite'] = JSON.stringify(listeActionVerite);
        //console.log(JSON.stringify(listeActionVerite));
    }
    
    initialiser();
}