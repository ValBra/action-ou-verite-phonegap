(function(){
	var instance = this;
	
	/*var btn = document.getElementById('btnAV');
	
	btn.onclick = function(){
		var CSStransforms = anime({
		  targets: '#CSStransforms .el',
		  translateX: 250,
		  scale: 2,
		  rotate: '1turn'
		});
		console.log("clic sur btn");
	}*/
	
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
		else if(hash.match(/^#liste-joueur/))
		{
		    this.listeJoueur = this.joueurDAO.lister();
		    var listeJoueurVue = new ListeJoueurVue(instance.listeJoueur);
		    listeJoueurVue.afficher();
		}
		else if(hash.match(/^#joueur\/([0-9]+)/))
        {
            var navigation = hash.match(/^#joueur\/([0-9]+)/);
            var idJoueur = navigation[1];
            var joueurVue = new JoueurVue(instance.listeJoueur[idJoueur]);
            joueurVue.afficher();
        }
		else if(hash.match(/^#ajouter-joueur/))
        {
            var ajouterJoueurVue = new AjouterJoueurVue(actionEnregistrerJoueur);
            ajouterJoueurVue.afficher();
        }
        else if(hash.match(/^#modifier-joueur\/([0-9]+)/))
        {
            var navigation = hash.match(/^#modifier-joueur\/([0-9]+)/);
            var idJoueur = navigation[1];
            var modifierJoueurVue = new ModifierJoueurVue(actionEnregistrerModifJoueur);
            modifierJoueurVue.afficher(instance.listeJoueur[idJoueur]);
        }
		else if(hash.match(/^#liste-actionVerite/))
        {
            this.listeActionVerite = this.actionVeriteDAO.lister();
			var listeActionVeriteVue = new ListeActionVeriteVue(instance.listeActionVerite);
			listeActionVeriteVue.afficher();
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

	var actionEnregistrerJoueur = function(joueur){
	    this.joueurDAO.ajouter(joueur);
    	naviguerAccueil();
    }

    var actionEnregistrerModifJoueur = function(joueur){
    	this.joueurDAO.modifier(joueur);
    	naviguerAccueil();
    }

	var naviguerAccueil = function(){
		window.location.hash = "";
	}
	lancer();
	
})();