function nouvelleTache() {

  // creation d'une ligne de liste et recuperation 
  // du saisie de l'utilisatuer
  var li = document.createElement("li");
  var valeurTacheSasie = document.getElementById("tacheSaisie").value;
  var texteSasie = document.createTextNode(valeurTacheSasie);
  texteSasie.className = "valeurSasie";

  // creation d'un inputer qui est par defaut desactiver 
  // et qui contient la valeur saisit var l'utilisateur 
  var modifierValeur = document.createElement("input");
  modifierValeur.value = valeurTacheSasie;
  modifierValeur.classList.add("valeurModifier");
  modifierValeur.disabled = true;
  li.appendChild(modifierValeur);

  // verifier si l'utilisateur ajouter une tache 
  if (valeurTacheSasie === '') {
    alert("Vous devrez ecrire une Tâche !!");
  } else {
    document.getElementById("listeTache").appendChild(li);
  }
  document.getElementById("tacheSaisie").value = "";

  //bouton modifier
  var btnModifier = document.createElement("button");
  btnModifier.innerHTML = "Modifier";
  btnModifier.className = "btnModifier";
  li.appendChild(btnModifier);

  // bouton supprimer
  var span = document.createElement("SPAN");
  var btnSupprimer = document.createTextNode("\u00D7");
  span.className = "supprimerTache";
  span.appendChild(btnSupprimer);
  li.appendChild(span);

  //modifier la tache modifier

  var modifier = document.getElementsByClassName("btnModifier");
  var j;
  for (j = 0; j < modifier.length; j++) {
    modifier[j].onclick = function () {
      var listeSelectionner = this.parentElement;
      var valeurAModifier = listeSelectionner.firstElementChild;
      if (valeurAModifier.disabled == true) {
        valeurAModifier.disabled = false;
      } else {
        valeurAModifier.disabled = true;
      }
    }
  }

  // supprimer une tache
  var supprimer = document.getElementsByClassName("supprimerTache");
  var i;
  for (i = 0; i < supprimer.length; i++) {
    supprimer[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }



}
  // fin du code ajotuer


  //suprimier une tache 





