function calculateWindChill(temp, windSpeed) {
    // Wind chill calculation formula (metric system)
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

window.onload = function () {
    let temp = 15; // Celsius
    let windSpeed = 10; // km/h

    // Only calculate windchill if conditions are met
    if (temp <= 10 && windSpeed > 4.8) {
        document.getElementById('wind-chill').textContent = calculateWindChill(temp, windSpeed) + " °C";
    } else {
        document.getElementById('wind-chill').textContent = "N/A";
    }
};
