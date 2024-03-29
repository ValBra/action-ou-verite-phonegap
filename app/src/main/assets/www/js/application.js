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
		else if(hash.match(/^#liste-joueur$/))
		{
		    this.listeJoueur = this.joueurDAO.lister();
		    var listeJoueurVue = new ListeJoueurVue(instance.listeJoueur);
		    listeJoueurVue.afficher();
		}
		else if(hash.match(/^#joueur\/([0-9]+)$/))
        {
            var navigation = hash.match(/^#joueur\/([0-9]+)$/);
            var idJoueur = navigation[1];
            var joueurVue = new JoueurVue(instance.listeJoueur[idJoueur]);
            joueurVue.afficher();
        }
		else if(hash.match(/^#ajouter-joueur$/))
        {
            var ajouterJoueurVue = new AjouterJoueurVue(actionEnregistrerJoueur);
            ajouterJoueurVue.afficher();
        }
        else if(hash.match(/^#modifier-joueur\/([0-9]+)$/))
        {
            var navigation = hash.match(/^#modifier-joueur\/([0-9]+)/);
            var idJoueur = navigation[1];
            var modifierJoueurVue = new ModifierJoueurVue(actionEnregistrerModifJoueur);
            modifierJoueurVue.afficher(instance.listeJoueur[idJoueur]);
        }
        else if(hash.match(/^#jouer$/))
        {
            this.listeJoueur = this.joueurDAO.lister();
            this.listeActionVerite = this.actionVeriteDAO.lister();
            var jeuVue = new JeuVue(instance.listeActionVerite, instance.listeJoueur, "rien");
            jeuVue.afficher();
        }
		else if(hash.match(/^#action2$/)){
			
		}
        else if(hash.match(/^#action$/))
        {
		    this.listeJoueur = this.joueurDAO.lister();
            this.listeActionVerite = this.actionVeriteDAO.lister();
            var jeuVue = new JeuVue(instance.listeActionVerite, instance.listeJoueur, "Action");
            jeuVue.afficher();
			window.location.hash = "#action2";
        }else if(hash.match(/^#verite2$/)){
			
		}
        else if(hash.match(/^#verite$/))
        {
		    this.listeJoueur = this.joueurDAO.lister();
            this.listeActionVerite = this.actionVeriteDAO.lister();
            var jeuVue = new JeuVue(instance.listeActionVerite, instance.listeJoueur, "Vérité");
            jeuVue.afficher();
			window.location.hash = "#verite2";
        }
		else if(hash.match(/^#liste-actionVerite$/))
        {
            this.listeActionVerite = this.actionVeriteDAO.lister();
			var listeActionVeriteVue = new ListeActionVeriteVue(instance.listeActionVerite);
			listeActionVeriteVue.afficher();
		}
		else if(hash.match(/^#actionVerite\/([0-9]+)$/))
        {
            var navigation = hash.match(/^#actionVerite\/([0-9]+)/);
            var idActionVerite = navigation[1];
            var actionVeriteVue = new ActionVeriteVue(instance.listeActionVerite[idActionVerite]);
            actionVeriteVue.afficher();
        }
		else if(hash.match(/^#ajouter-actionVerite$/))
        {
            var ajouterActionVeriteVue = new AjouterActionVeriteVue(actionEnregistrerActionVerite);
            ajouterActionVeriteVue.afficher();
		}
		else if(hash.match(/^#modifier-actionVerite\/([0-9]+)$/))
        {
            var navigation = hash.match(/^#modifier-actionVerite\/([0-9]+)/);
            var idActionVerite = navigation[1];
            var modifierActionVeriteVue = new ModifierActionVeriteVue(actionEnregistrerModifActionVerite);
            modifierActionVeriteVue.afficher(instance.listeActionVerite[idActionVerite]);
        }else if(hash.match(/^#choix-difficulte$/)){
			var choixDifficulte = new VueChoixDifficulte();
            choixDifficulte.afficher();
		}
		else
        {
            alert("Error : Page invalide");
        }
	}
	
	var actionEnregistrerActionVerite = function(actionVerite){
		this.actionVeriteDAO.ajouter(actionVerite);
		naviguerListeActionVerite();
	}
	
	var actionEnregistrerModifActionVerite = function(actionVerite){
		this.actionVeriteDAO.modifier(actionVerite);
		naviguerListeActionVerite();
	}

	var actionEnregistrerJoueur = function(joueur){
	    this.joueurDAO.ajouter(joueur);
    	naviguerListeJoueur();
    }

    var actionEnregistrerModifJoueur = function(joueur){
    	this.joueurDAO.modifier(joueur);
    	naviguerListeJoueur();
    }

	var naviguerAccueil = function(){
		window.location.hash = "";
    }
    var naviguerListeActionVerite = function(){
		window.location.hash = "#liste-actionVerite";
	}
	var naviguerListeJoueur = function(){
		window.location.hash = "#liste-joueur";
	}
	lancer();
	
})();