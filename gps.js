document.getElementById("id_logic_version").innerHTML = "Logic version = 2018.12.11.1";

function get_position()
{
	navigator.geolocation.getCurrentPosition(on_gps_ok, on_gps_error);
}

function on_gps_ok(e)
{
	document.getElementById("id_lat").innerHTML = e.coords.latitude;
	document.getElementById("id_long").innerHTML = e.coords.longitude;
	document.getElementById("id_acc").innerHTML = e.coords.accuracy;
	document.getElementById("id_alt").innerHTML = e.coords.altitude;
	document.getElementById("id_acc_alt").innerHTML = e.coords.altitudeAccuracy;
}

function on_gps_error(e)
{
	alert("Eroare GPS");
}
