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

    this.ajouter = function(joueur)
        {
            console.log("donnee/JoueurDAO : ajouter(actionVerite)");
            // il faut ici attribuer un id au actionVerite
            if(listeJoueur.length > 0) joueur.id = listeJoueur[listeJoueur.length-1].id + 1;
            else joueur.id = 0;

            listeJoueur[joueur.id] = joueur;
            localStorage['joueur'] = JSON.stringify(listeJoueur);
            //console.log(JSON.stringify(listeActionVerite));

        }

    initialiser();
}