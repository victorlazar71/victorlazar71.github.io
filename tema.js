document.getElementById("id_business_version").innerHTML = "Business version = 2019.02.08.10";

navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);


function on_position_success(e)
{
	 document.getElementById("id_lat").innerHTML ="Latitude="+ e.coords.latitude;
	 document.getElementById("id_long").innerHTML ="Longitude="+ e.coords.longitude;
	 document.getElementById("id_acc").innerHTML ="Accuracy="+ e.coords.accuracy + "m";
	 document.getElementById("id_alt").innerHTML ="Altitude="+ e.coords.altitude + "m";
	 
	 var map_str=""https://maps.googleapis.com/maps/api/js">"+
			"center="+ e.coords.latitude + "," + e.coords.longitude +
			"&zoom=15" +
			"&size=400x300" +
			"&key=AIzaSyBflsfrBYWXqLzpqKW1HGF7npiwqfVrCEM"+
			"&markers=color:blue|label:A|" + e.coords.latitude + "," + e.coords.longitude +
			"&path=color:red|" + e.coords.latitude + "," + e.coords.longitude + "|Căminul Studenţesc Nr. 1";
			
	 document.getElementById("id_img").src=map_str;
}

function on_position_failure(e)
{
	
	alert("eroare!");
	
}
