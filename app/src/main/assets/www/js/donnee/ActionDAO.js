var ActionDAO = function()
{
    var listeAction;
    var initialiser = function()
    {
        if(!listeAction) listeAction = [];
    }

    this.chercherAvecId = function(id)
    {

    }

    this.lister = function()
    {
        console.log("donnee/ActionDAO : lister()");
        //console.log("lister->localStorage['action'] : " + localStorage['action']);
        if(localStorage['action'])
        {
            listeAction = JSON.parse(localStorage['action']);
        }
        else
        {
            for(position in listeAction)
            {
                var action = new ActionVerite(
                    listeAction[position].phrase,
                    listeAction[position].type,
                    listeAction[position].theme,
                    listeAction[position].difficulte,
                    listeAction[position].createur,
                    listeAction[position].id
                );
                listeAction[position] = action;
            }
        }
        return listeAction;
    }

    this.ajouter = function(action)
    {
        console.log("donnee/ActionDAO : ajouter(action)");
        // il faut ici attribuer un id au action
        if(listeAction.length > 0) action.id = listeAction[listeAction.length-1].id + 1;
        else action.id = 0;

        listeAction[action.id] = action;
        localStorage['action'] = JSON.stringify(listeAction);
        //console.log(JSON.stringify(listeAction));

    }

    this.modifier = function(action)
    {
        console.log("donnee/ActionDAO : modifier(action)");
        
        listeAction[action.id] = action;
        localStorage['action'] = JSON.stringify(listeAction);
        //console.log(JSON.stringify(listeAction));
    }
    
    initialiser();
}