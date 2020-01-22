function convertDate(d) {
	let cityStr = `${d.origin} - ${d.destination}`;
	let departure = new Date(d.date).toLocaleString('ru',{hour: 'numeric',minute: 'numeric'});
	let duration = `${Math.floor(d.duration/60)}ч. ${d.duration%60} мин.`;
	let arrival = new Date(Date.parse(d.date) + d.duration * 60000).toLocaleString('ru',{hour: 'numeric',minute: 'numeric'})
	let stops = [d.stops.length,	d.stops.join(', ')];

	return{ cityStr, departure, duration, arrival, stops }
}

export default convertDate
