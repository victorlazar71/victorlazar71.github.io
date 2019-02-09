document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.02.9.6";

function init() {
        var compass = document.getElementById('compass');
        if(window.DeviceOrientationEvent) {
  
          window.addEventListener('deviceorientation', function(event) {
                var alpha;
                //heck pentru proprietatea iOS
                if(event.webkitCompassHeading) {
                  alpha = event.webkitCompassHeading;
                  //rotația este inversată pentru iOS
                  compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
                }
                //nu este iOS
                else {
                  alpha = event.alpha;
                  webkitAlpha = alpha;
                  if(!window.chrome) {
                    //Să presupunem stoc Android (acest lucru este brut, dar suficient de bun pentru exemplul nostru) si aplică offset
                    webkitAlpha = alpha-270;
                  }
                }
 
                compass.style.Transform = 'rotate(' + alpha + 'deg)';
                compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                //rotația este inversată pentru FF
                compass.style.MozTransform = 'rotate(-' + alpha + 'deg)'; 
              }, false);
        }
      }
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
