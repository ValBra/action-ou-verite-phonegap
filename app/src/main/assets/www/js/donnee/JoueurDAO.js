var JoueurDAO = function()
{
    var listeJoueur;
    var initialiser = function()
    {
        if(!listeJoueur) listeJoueur = [];
    }

    this.chercherAvecId = function(id)
    {

    }

    this.lister = function()
    {
        console.log("donnee/JoueurDAO : lister()");

        if(localStorage['joueur'])
        {
            listeJoueur = JSON.parse(localStorage['joueur']);
        }
        else
        {
            for(position in listeJoueur)
            {
                var joueur = new Joueur(
                    listeJoueur[position].pseudo,
                    listeJoueur[position].score,
                    listeJoueur[position].id
                );
                listeJoueur[position] = joueur;
            }
        }

        return listeJoueur;

    }

    initialiser();
}