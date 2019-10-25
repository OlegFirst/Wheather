axios.get('http://dataservice.accuweather.com/locations/v1/cities/', {
	params: {
		apikey: 'ct3yQyWGh3XvJ65VhxrmBblN0mESBu2l',
		q: 'Kyiv'
	}
})
.then((res) => {
	console.log(res);
})
.catch((err) => {
	console.log(err);
})