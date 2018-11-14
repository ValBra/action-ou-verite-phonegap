var ModifierActionVue = (function(){
    var pageModifierAction = document.getElementById("page-modifier-action").innerHTML;

    return function(actionEnregistrerModifAction)
    {
        this.afficher = function(action)
        {
            console.log("vue/ModifierActionVue.js : afficher(action)");
            
            document.getElementsByTagName("body")[0].innerHTML = pageModifierAction;

            var formulaireModifier = document.getElementById("formulaire-modifier-action");

            document.getElementById("id").value = action.id;
            document.getElementById("phrase").value = action.phrase;
            document.getElementById("type").value = action.type;
            document.getElementById("theme").value = action.theme;
            document.getElementById("difficulte").value = action.difficulte;
            document.getElementById("createur").value = action.createur;

            formulaireModifier.addEventListener("submit",enregistrerModifAction);
        }

        var enregistrerModifAction = function(evenement)
        {
            evenement.preventDefault();

            var id = document.getElementById("id").value;
            var phrase = document.getElementById("phrase").value;
            var type = document.getElementById("type").value;
            var theme = document.getElementById("theme").value;
            var difficulte = document.getElementById("difficulte").value;
            var createur = document.getElementById("createur").value;

            var action = new ActionVerite(phrase, type, theme, difficulte, createur, id);

            actionEnregistrerModifAction(action);
        }
    };
})();