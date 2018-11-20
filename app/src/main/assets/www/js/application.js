(function(){
	var instance = this;
	
	var lancer = function(){
        this.actionVeriteDAO = new ActionVeriteDAO();
        this.joueurDAO = new JoueurDAO();
		window.addEventListener("hashchange",naviguer);
		naviguer();
	}
	
	var naviguer = function(){
		var hash = window.location.hash;
		if(!hash){
			var accueilVue = new AccueilVue();
			accueilVue.afficher();
		}
		else if(hash.match(/^#liste-actionVerite/))
        {
            this.listeActionVerite = this.actionVeriteDAO.lister();
			var listeActionVeriteVue = new ListeActionVeriteVue(instance.listeActionVerite);
			listeActionVeriteVue.afficher();
		}
		else if(hash.match(/^#selectionJoueur/))
		{
		    this.listeJoueur = this.joueurDAO.lister();
		    var listeJoueurVue = new ListeJoueurVue(instance.listeJoueur);
		    listeJoueurVue.afficher();
		}
		else if(hash.match(/^#actionVerite\/([0-9]+)/))
        {
            var navigation = hash.match(/^#actionVerite\/([0-9]+)/);
            var idActionVerite = navigation[1];
            var actionVeriteVue = new ActionVeriteVue(instance.listeActionVerite[idActionVerite]);
            actionVeriteVue.afficher();
        }
		else if(hash.match(/^#ajouter-actionVerite/))
        {
            var ajouterActionVeriteVue = new AjouterActionVeriteVue(actionEnregistrerActionVerite);
            ajouterActionVeriteVue.afficher();
		}
		else if(hash.match(/^#modifier-actionVerite\/([0-9]+)/))
        {
            var navigation = hash.match(/^#modifier-actionVerite\/([0-9]+)/);
            var idActionVerite = navigation[1];
            var modifierActionVeriteVue = new ModifierActionVeriteVue(actionEnregistrerModifActionVerite);
            modifierActionVeriteVue.afficher(instance.listeActionVerite[idActionVerite]);
        }
		else
        {
            alert("Error : Page invalide");
        }
	}
	
	var actionEnregistrerActionVerite = function(actionVerite){
		this.actionVeriteDAO.ajouter(actionVerite);
		naviguerAccueil();
	}
	
	var actionEnregistrerModifActionVerite = function(actionVerite){
		this.actionVeriteDAO.modifier(actionVerite);
		naviguerAccueil();
	}
	
	var naviguerAccueil = function(){
		window.location.hash = "";
	}
	lancer();
	
})();