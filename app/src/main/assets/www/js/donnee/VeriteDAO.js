var VeriteDAO = function()
{
    var listeVerite;
    var initialiser = function()
    {
        if(!listeVerite) listeVerite = [];
    }

    this.chercherAvecId = function(id)
    {

    }

    this.lister = function()
    {
        console.log("donnee/VeriteDAO : lister()");
        //console.log("lister->localStorage['verite'] : " + localStorage['verite']);
        if(localStorage['verite'])
        {
            listeVerite = JSON.parse(localStorage['verite']);
        }
        else
        {
            for(position in listeVerite)
            {
                var verite = new ActionVerite(
                    listeVerite[position].phrase,
                    listeVerite[position].type,
                    listeVerite[position].theme,
                    listeVerite[position].difficulte,
                    listeVerite[position].createur,
                    listeVerite[position].id
                );
                listeVerite[position] = verite;
            }
        }
        
        return listeVerite;

    }
    
    initialiser();
}