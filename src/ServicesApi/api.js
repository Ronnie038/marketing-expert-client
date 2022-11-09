export const setAuthToken = (user) => {
	fetch('http://localhost:5000/jwt', {
		method: 'post',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => {
			localStorage.setItem('auth-token', data.token);
		})
		.catch((err) => console.log(err));
};
