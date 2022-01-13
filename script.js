

function login() {
	var age = document.getElementById("nombre").value;

	if (isNaN(age)) {
		alert('Vous devez entrer un nombre');
	}
	else {
		if (age < 18) {
			alert('Hop ! Tu dois être majeur pour accéder à notre site');
		}
		else { 
			window.location.href="site.html";
			// redirection();
			alert('Bravo ! Tu peux accéder à notre site de campagne !');
			// alert('ok');
			// redirection()
			sessionStorage["session"] = "majeur";
		}
	}
}
