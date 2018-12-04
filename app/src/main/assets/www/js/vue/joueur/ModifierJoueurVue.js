var ModifierJoueurVue = (function()
{
    var pageModifierJoueur = document.getElementById("page-modifier-joueur").innerHTML;

    return function(actionEnregistrerModifJoueur)
    {
        this.afficher = function(joueur)
        {
            console.log("vue/ModifierJoueurVue.js : afficher(joueur)");
            
            document.getElementsByTagName("body")[0].innerHTML = pageModifierJoueur;

            var formulaireModifier = document.getElementById("formulaire-modifier-joueur");

            document.getElementById("id").value = joueur.id;
            document.getElementById("pseudo").value = joueur.pseudo;

            formulaireModifier.addEventListener("submit",enregistrerModifJoueur);
            
            document.getElementById("lien-retour").href = '#joueur/' + joueur.id;
        }

        var enregistrerModifJoueur = function(evenement)
        {
            evenement.preventDefault();

            var id = document.getElementById("id").value;
            var pseudo = document.getElementById("pseudo").value;

            var joueur = new Joueur(pseudo, id);

            actionEnregistrerModifJoueur(joueur);
        }
    };
})();