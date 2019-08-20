const toDegreesMinutesAndSeconds = (coordinate) => {
	var absolute = Math.abs(coordinate);
	var degrees = Math.floor(absolute);
	var minutesNotTruncated = (absolute - degrees) * 60;
	var minutes = Math.floor(minutesNotTruncated);
	var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

	return degrees + "+" + minutes + "+" + seconds;
}

export const convertDMS = (lat, lng) => {
	const latitude = toDegreesMinutesAndSeconds(lat);
	const latitudeCardinal = lat >= 0 ? "N" : "S";

	const longitude = toDegreesMinutesAndSeconds(lng);
	const longitudeCardinal = lng >= 0 ? "E" : "W";

return latitude + "+" + latitudeCardinal + "+" + longitude + "+" + longitudeCardinal;
}
