document.getElementById("id_logic_version").innerHTML = "Logic version : 2018.11.06.11";

window.addEventListener("deviceorientation", la_schimbare_gyro);
window.addEventListener("devicemotion", la_schimbare_acc);

function la_schimbare_acc(e)
{
  var acc_x = e.accelerationIncludingGravity.x;
  var acc_y = e.accelerationIncludingGravity.y;
  var acc_z = e.accelerationIncludingGravity.z;
  
  document.getElementById("id_acc_x").innerHTML = "acc_x = " + acc_x;
  document.getElementById("id_acc_y").innerHTML = "acc_y = " + acc_y;
  document.getElementById("id_acc_z").innerHTML = "acc_z = " + acc_z;
  
  document.getElementById("id_rot_x").innerHTML = Math.atan(acc_x / acc_z) * 180 / Math.PI;
  document.getElementById("id_rot_y").innerHTML = Math.atan(acc_y / acc_z) * 180 / Math.PI;

}

function la_schimbare_gyro(e)
{
  document.getElementById("id_x").innerHTML = "gyro_x = " + e.beta;
  document.getElementById("id_y").innerHTML = "gyro_y = " + e.gamma;
  document.getElementById("id_z").innerHTML = "gyro_z = " + e.alpha;
  

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
  
  var R = 50;
  
  context.clearRect(0, 0, canvas.width, canvas.height);

context.beginPath();
context.arc(canvas.width / 2 + e.gamma / 90 * (canvas.width / 2 - R), canvas.height / 2 + e.beta / 90 * (canvas.height / 2 - R), R, 0, 2 * Math.PI);
context.stroke();
  
}
