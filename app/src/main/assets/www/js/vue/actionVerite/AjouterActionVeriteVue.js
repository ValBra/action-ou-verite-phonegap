var AjouterActionVeriteVue = (function(){
    var pageAjouterActionVerite = document.getElementById("page-ajouter-actionVerite").innerHTML;

    return function(actionEnregistrerActionVerite)
    {
        this.afficher = function()
        {
            console.log("vue/AjouterActionVeriteVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageAjouterActionVerite;

            var formulaireAjouter = document.getElementById("formulaire-ajouter-actionVerite");
            formulaireAjouter.addEventListener("submit",enregistrerActionVerite);
        }

        var enregistrerActionVerite = function(evenement)
        {
            console.log("vue/AjouterActionVeriteVue : enregistrerActionVerite(evenement)");
            
            evenement.preventDefault();

            var phrase = document.getElementById("phrase").value;
            var type = document.getElementById("type").value;
            var theme = document.getElementById("theme").value;
            var difficulte = document.getElementById("difficulte").value;
            var createur = document.getElementById("createur").value;
            
            var actionVerite = new ActionVerite(phrase, type, theme, difficulte, createur, null);

            actionEnregistrerActionVerite(actionVerite);
        }
    };
})();
