document.addEventListener("DOMContentLoaded", function() {
	const user = "contact";
	const domain = "ambientphile";
	const ext = "com";
	const email = user + "@" + domain + "." + ext;
	document.getElementById("email").innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
});
