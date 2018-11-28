var JouerVue = (function(){

    var pageJeu = document.getElementById("page-jeu").innerHTML;

    classe = function()
    {

        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageJeu;

        }
    };

    return classe;
})()