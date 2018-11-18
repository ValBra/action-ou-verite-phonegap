var ActionVeriteVue = (function(){
    var pageActionVerite = document.getElementById("page-actionVerite").innerHTML;

    return function(actionVerite)
    {
        var actionVeriteType;
        var actionVeritePhrase;
        var actionVeriteTheme;
        var actionVeriteCreateur;
        var actionVeriteDifficulte;

        this.afficher = function()
        {
            console.log("vue/ActionVeriteVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageActionVerite;

            actionVeriteType = document.getElementById("actionVerite-type");
            actionVeriteType.innerHTML = actionVerite.type;

            actionVeritePhrase = document.getElementById("actionVerite-phrase");
            actionVeritePhrase.innerHTML = actionVerite.phrase;

            actionVeriteTheme = document.getElementById("actionVerite-theme");
            actionVeriteTheme.innerHTML = actionVerite.theme;
            
            actionVeriteDifficulte = document.getElementById("actionVerite-difficulte");
            actionVeriteDifficulte.innerHTML = actionVerite.difficulte;
            
            actionVeriteCreateur = document.getElementById("actionVerite-createur");
            actionVeriteCreateur.innerHTML = actionVerite.createur;
            
            document.getElementById("lien-modifier-actionVerite").href = '#modifier-actionVerite/' + actionVerite.id;
        }

    };
})();
