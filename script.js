

function fonction() {
	var age2 = document.getElementById("nombre").value;

	if (isNaN(age2)) {
		alert('ce n\'est pas un chiffre');
	}
	else {
		if (age2 < 18) {
			alert('Band train ou lé pas majeur ' + age2);
		}
		else { 
			window.location.href="lapage.html";
			// redirection();
			alert('Lébon rent a ou ' + age2);
			// alert('ok');
			// redirection()
			sessionStorage["session"] = "majeur";
		}
	}
}




// function redirection() {
// 	// window.location.href="lapage.html";
// 	// 1. Récupération du nombre entré
// 	var age = document.forms.monFormulaire.nombre.value;
// 	var age2 = document.getElementById("nombre").value;

// 	// 2. Vérification des saisies de l'utilisateur
// 	if (isNaN(age2)) {
// 		alert('ce n\'est pas un chiffre');
// 	}
// 	else {
// 		if (age2 < 18) {
// 			alert('Band train ou lé pas majeur ' + age2);
// 		}
// 		else { 
// 			window.location.href="lapage.html";
// 			// redirection();
// 			alert('Lébon rent a ou ' + age2);
// 			// alert('ok');
// 			// redirection()
// 		}
// 	}
// }

// window.onbeforeunload = function() {   
// 	localStorage.removeItem(key);   
// 	return ''; 
// };