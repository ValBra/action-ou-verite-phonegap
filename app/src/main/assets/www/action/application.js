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
			this.listeAction = this.actionDAO.lister();
			this.listeVerite = this.veriteDAO.lister();
			var listeActionVue = new ListeActionVue(instance.listeAction);
			var listeVeriteVue = new ListeVeriteVue(instance.listeVerite);
			listeActionVue.afficher();
			listeVeriteVue.afficher();
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