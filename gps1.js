document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.02.03.1";

function init() {
        var compass = document.getElementById('compass');
        if(window.DeviceOrientationEvent) {
  
          window.addEventListener('deviceorientation', function(event) {
                var alpha;
                //Check for iOS property
                if(event.webkitCompassHeading) {
                  alpha = event.webkitCompassHeading;
                  //Rotation is reversed for iOS
                  compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
                }
                //non iOS
                else {
                  alpha = event.alpha;
                  webkitAlpha = alpha;
                  if(!window.chrome) {
                    //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    webkitAlpha = alpha-270;
                  }
                }
 
                compass.style.Transform = 'rotate(' + alpha + 'deg)';
                compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                //Rotation is reversed for FF
                compass.style.MozTransform = 'rotate(-' + alpha + 'deg)'; 
              }, false);
        }
      }
function init() {
      //Find our div containers in the DOM
      var dataContainerOrientation = document.getElementById('dataContainerOrientation');
      var dataContainerMotion = document.getElementById('dataContainerMotion');
 
      //Check for support for DeviceOrientation event
      if(window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
                var alpha = event.alpha;
                var beta = event.beta;
                var gamma = event.gamma;
               
                if(alpha!=null || beta!=null || gamma!=null) 
                  dataContainerOrientation.innerHTML = 'alpha: ' + alpha + '<br/>beta: ' + beta + '<br />gamma: ' + gamma;
              }, false);
      }
 
      // Check for support for DeviceMotion events
      if(window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', function(event) {
                var x = event.accelerationIncludingGravity.x;
                var y = event.accelerationIncludingGravity.y;
                var z = event.accelerationIncludingGravity.z;
                var r = event.rotationRate;
                var html = 'Acceleration:<br />';
                html += 'x: ' + x +'<br />y: ' + y + '<br/>z: ' + z+ '<br />';
                html += 'Rotation rate:<br />';
                if(r!=null) html += 'alpha: ' + r.alpha +'<br />beta: ' + r.beta + '<br/>gamma: ' + r.gamma + '<br />';
                dataContainerMotion.innerHTML = html;                  
              });
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
