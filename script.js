const form = document.querySelector('form');
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const url = document.getElementById('url-input').value;
			fetch('api' + url)
			.then(response => response.json())
			.then(data => {
				if (data.isListed) {
					document.getElementById('result').innerHTML = '<p style="color: red;">The URL is malicious!</p>';
				} else {
					document.getElementById('result').innerHTML = '<p style="color: green;">The URL is safe.</p>';
				}
			})
			.catch(error => {
				console.error(error);
				document.getElementById('result').innerHTML = '<p style="color: red;">An error occurred while checking the URL.</p>';
			});
		});