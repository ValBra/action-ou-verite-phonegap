var ModifierActionVeriteVue = (function(){
    var pageModifierActionVerite = document.getElementById("page-modifier-actionVerite").innerHTML;

    return function(actionVeriteEnregistrerModifActionVerite)
    {
        this.afficher = function(actionVerite)
        {
            console.log("vue/ModifierActionVeriteVue.js : afficher(actionVerite)");
            
            document.getElementsByTagName("body")[0].innerHTML = pageModifierActionVerite;

            var formulaireModifier = document.getElementById("formulaire-modifier-actionVerite");

            document.getElementById("id").value = actionVerite.id;
            document.getElementById("phrase").value = actionVerite.phrase;
            document.getElementById("type").value = actionVerite.type;
            document.getElementById("theme").value = actionVerite.theme;
            document.getElementById("difficulte").value = actionVerite.difficulte;
            document.getElementById("createur").value = actionVerite.createur;

            formulaireModifier.addEventListener("submit",enregistrerModifActionVerite);
        }

        var enregistrerModifActionVerite = function(evenement)
        {
            evenement.preventDefault();

            var id = document.getElementById("id").value;
            var phrase = document.getElementById("phrase").value;
            var type = document.getElementById("type").value;
            var theme = document.getElementById("theme").value;
            var difficulte = document.getElementById("difficulte").value;
            var createur = document.getElementById("createur").value;

            var actionVerite = new ActionVerite(phrase, type, theme, difficulte, createur, id);

            actionVeriteEnregistrerModifActionVerite(actionVerite);
        }
    };
})();