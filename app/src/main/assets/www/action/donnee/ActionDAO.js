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
                var action = new Action(
                    listeAction[position].nom,
                    listeAction[position].id
                );
                listeAction[position] = action;
            }
        }
        
        return listeAction;

    }
    
    initialiser();
}