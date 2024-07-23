function scrollToDiv(divId) {
	document.querySelectorAll('div').forEach(div => {
		div.classList.remove('highlight');
	});
	const targetDiv = document.getElementById(divId);
	targetDiv.scrollIntoView({ behavior: 'smooth' });
	targetDiv.classList.toggle('highlight');
}

document.addEventListener("DOMContentLoaded", function() {
	const user = "contact";
	const domain = "ambiencephile";
	const ext = "com";
	const email = user + "@" + domain + "." + ext;
	document.getElementById("email").innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
});

function sortSamples(property) {
	const samplesContainer = document.getElementById("samples-container");
	const samples = Array.from(samplesContainer.getElementsByClassName("audio-box"));

	samples.sort((a, b) => {
		let aValue, bValue;

		switch (property) {
			case 'Title':
				aValue = a.querySelector('div:nth-child(1) span').innerText;
				bValue = b.querySelector('div:nth-child(1) span').innerText;
				break;
			case 'Duration':
				aValue = a.querySelector('div:nth-child(2) span').innerText;
				bValue = b.querySelector('div:nth-child(2) span').innerText;
				break;
			case 'Location':
				aValue = a.querySelector('div:nth-child(3) span').innerText;
				bValue = b.querySelector('div:nth-child(3) span').innerText;
				break;
			case 'Date':
				aValue = a.querySelector('div:nth-child(4) span').innerText;
				bValue = b.querySelector('div:nth-child(4) span').innerText;
				break;
			case 'ID':
				aValue = parseInt(a.querySelector('div:nth-child(6) span').innerText);
				bValue = parseInt(b.querySelector('div:nth-child(6) span').innerText);
				break;
			case 'Price':
				aValue = parseFloat(a.querySelector('div:nth-child(7) span').innerText.replace('$', ''));
				bValue = parseFloat(b.querySelector('div:nth-child(7) span').innerText.replace('$', ''));
				break;
		}

		if (property === 'Date') {
			return new Date(aValue) - new Date(bValue);
		} else if (property === 'ID' || property === 'Price') {
			return aValue - bValue;
		} else {
			return aValue.localeCompare(bValue);
		}
	});

	samples.forEach(sample => samplesContainer.appendChild(sample));
}
