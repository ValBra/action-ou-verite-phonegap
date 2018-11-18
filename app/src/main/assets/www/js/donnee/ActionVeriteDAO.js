var ActionVeriteDAO = function()
{
    var listeActionVerite;
    var initialiser = function()
    {
        if(!listeActionVerite) listeActionVerite = [];
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