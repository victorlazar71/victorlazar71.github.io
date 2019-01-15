
document.getElementById(id_logic_version”).innerHTML = “Logic version: 2019.01.15.0”;

navigator.getBattery().then(on_battery_ok).catch(on_battery_error);
function on_battery_ok(baterie)
{
	document.getElementById("id_baterie").innerHTML = baterie.level + “ “ + baterie.dischargingTime;
	
baterie.addEventListener("chargingchange", on_battery_status_change);
}
function on_battery_status_change()


function on_battery_error()
{ 
if (baterie.charging)
document.getElementById("id_baterie")."se incarca"+baterie.level;
else
document.getElementById("id_baterie")."nu incarca"+baterie.level;
{
	alert("eroare de citire baterie");
}
