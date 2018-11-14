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
                var verite = new Verite(
                    listeVerite[position].nom,
                    listeVerite[position].id
                );
                listeVerite[position] = verite;
            }
        }
        
        return listeVerite;

    }
    
    initialiser();
}