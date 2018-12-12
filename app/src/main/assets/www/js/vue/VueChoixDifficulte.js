var VueChoixDifficulte = (function()
{
    var pageChoixDifficulte = document.getElementById("page-difficulte").innerHTML;

    return function()
    {
        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageChoixDifficulte;

            var formulaireAjouter = document.getElementById("formulaire-choix-difficulte");
            formulaireAjouter.addEventListener("submit",enregistrerChoixDifficulte);
        }

        var enregistrerChoixDifficulte = function(evenement)
        {
            
            evenement.preventDefault();

            var theme = document.getElementById("theme").value;
            var difficulte = document.getElementById("difficulte").value;
        }
    };
})()