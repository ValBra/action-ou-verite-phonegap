(function(){
	var instance = this;
	
	var lancer = function(){
        this.actionDAO = new ActionDAO();
    	this.veriteDAO = new VeriteDAO();
		window.addEventListener("hashchange",naviguer);
		naviguer();
	}
	
	var naviguer = function(){
		var hash = window.location.hash;
		if(!hash){
			var accueilVue = new AccueilVue();
			accueilVue.afficher();
		}
		else if(hash.match(/^#liste-action/))
        {
            this.listeAction = this.actionDAO.lister();
			var listeActionVue = new ListeActionVue(instance.listeAction);
			listeActionVue.afficher();
		}
		else if(hash.match(/^#ajouter-action/))
        {
            var ajouterActionVue = new AjouterActionVue(actionEnregistrerAction);
            ajouterActionVue.afficher();
        }
		else if(hash.match(/^#liste-verite/))
        {
            this.listeVerite = this.veriteDAO.lister();
			var listeVeriteVue = new ListeVeriteVue(instance.listeVerite);
			listeVeriteVue.afficher();
		}
		else
        {
            alert("Error : Page invalide");
        }
	}
	
	var actionEnregistrerAction = function(action){
		this.actionDAO.ajouter(action);
		naviguerAccueil();
	}
	
	var actionModifierAction = function(action){
		this.actionDAO.modifier(action);
		naviguerAccueil();
	}
	
	var actionEnregistrerVerite = function(verite){
		this.veriteDAO.ajouter(verite);
		naviguerAccueil();
	}
	
	var actionModifierVerite = function(Verite){
		this.veriteDAO.modifier(Verite);
		naviguerAccueil();
	}
	
	var naviguerAccueil = function(){
		window.location.hash = "";
	}
	lancer();
	
})();