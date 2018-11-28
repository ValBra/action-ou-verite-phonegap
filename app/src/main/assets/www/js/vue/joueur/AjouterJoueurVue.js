var AjouterJoueurVue = (function()
{
    var pageAjouterJoueur = document.getElementById("page-ajouter-joueur").innerHTML;

    return function(actionEnregistrerJoueur)
    {
        this.afficher = function()
        {
            console.log("vue/AjouterJoueurVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageAjouterJoueur;

            var formulaireAjouter = document.getElementById("formulaire-ajouter-joueur");
            formulaireAjouter.addEventListener("submit",enregistrerJoueur);
        }

        var enregistrerJoueur = function(evenement)
        {
            console.log("vue/AjouterJoueur : enregistrerJoueur(evenement)");
            
            evenement.preventDefault();

            var pseudo = document.getElementById("pseudo").value;
            
            var joueur = new Joueur(pseudo, null);

            actionEnregistrerJoueur(joueur);
        }
    };
})();
