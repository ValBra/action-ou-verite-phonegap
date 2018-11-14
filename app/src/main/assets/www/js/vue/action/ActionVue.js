var ActionVue = (function(){
    var pageAction = document.getElementById("page-action").innerHTML;

    return function(action)
    {
        var actionType;
        var actionPhrase;
        var actionTheme;
        var actionCreateur;
        var actionDifficulte;

        this.afficher = function()
        {
            console.log("vue/ActionVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageAction;

            actionType = document.getElementById("action-type");
            actionType.innerHTML = action.type;

            actionPhrase = document.getElementById("action-phrase");
            actionPhrase.innerHTML = action.phrase;

            actionTheme = document.getElementById("action-theme");
            actionTheme.innerHTML = action.theme;
            
            actionDifficulte = document.getElementById("action-difficulte");
            actionDifficulte.innerHTML = action.difficulte;
            
            actionCreateur = document.getElementById("action-createur");
            actionCreateur.innerHTML = action.createur;
            
            document.getElementById("lien-modifier-action").href = '#modifier-action/' + action.id;
        }

    };
})();
