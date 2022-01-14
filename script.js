function diffDate(date1, date2)
{
  return ((date1.getTime() - date2.getTime()) / 31536000000).toFixed(0);
}


function login() {
	var date_nais = document.getElementById("date_nais").value;

	var date_naiss = new Date(date_nais)
	var today = new Date();

	// age = ((today.getTime() - date_naiss.getTime()) / 31536000000).toFixed(0);
	age = diffDate(today, date_naiss);

	if (age < 18) {
		alert('Hop la ! Tu dois être majeur pour accéder à notre site');
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
