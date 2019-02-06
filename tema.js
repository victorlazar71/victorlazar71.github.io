document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.02.06.0";
document.getElementById("id_start").addEventListener("click", get_position);

//---------------------------
function get_position()
{
	navigator.geolocation.getCurrentPosition(on_gps_ok, on_error);
}
//---------------------------
function on_gps_ok(e)
{
	document.getElementById("id_lat").innerHTML = e.coords.latitude;
	document.getElementById("id_long").innerHTML = e.coords.longitude;
	document.getElementById("id_acc").innerHTML = e.coords.accuracy;
}
//---------------------------
function on_error(e)
{
	alert("Error" + e.error);
}
//---------------------------
