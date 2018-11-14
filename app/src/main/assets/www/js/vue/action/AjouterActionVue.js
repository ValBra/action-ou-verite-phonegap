var AjouterActionVue = (function(){
    var pageAjouterAction = document.getElementById("page-ajouter-action").innerHTML;

    return function(actionEnregistrerAction)
    {
        this.afficher = function()
        {
            console.log("vue/AjouterActionVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageAjouterAction;

            var formulaireAjouter = document.getElementById("formulaire-ajouter-action");
            formulaireAjouter.addEventListener("submit",enregistrerAction);
        }

        var enregistrerAction = function(evenement)
        {
            console.log("vue/AjouterActionVue : enregistrerAction(evenement)");
            
            evenement.preventDefault();

            var phrase = document.getElementById("phrase").value;
            var type = document.getElementById("type").value;
            var theme = document.getElementById("theme").value;
            var difficulte = document.getElementById("difficulte").value;
            var createur = document.getElementById("createur").value;
            
            var action = new ActionVerite(phrase, type, theme, difficulte, createur, null);

            actionEnregistrerAction(action);
        }
    };
})();
