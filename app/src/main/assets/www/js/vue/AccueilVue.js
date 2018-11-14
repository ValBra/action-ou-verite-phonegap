var AccueilVue = (function()
{
    var pageAccueil = document.getElementById("page-accueil").innerHTML;

    return function()
    {
        this.afficher = function()
        {
            console.log("vue/AccueilVue : afficher()");
            document.getElementsByTagName("body")[0].innerHTML = pageAccueil;
        }
    };

})();
