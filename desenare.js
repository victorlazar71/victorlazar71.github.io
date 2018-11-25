document.getElementById("id_logic_version").innerHTML = 
		"Logic version = 2018.11.25.0";
		
var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("touchmove", on_touch_move);

var rect = canvas.getBoundingClientRect();
//---------------------------------

var lastX = 0;
var lastY = 0;

function on_touch(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changedTouches.item(i).pageX - rect.left,
					e.changedTouches.item(i).pageY - rect.top,
					20,
					0, 2 * Math.PI
					);
		context.stroke();
		lastX = e.changedTouches.item(i).pageX;		
		lastY = e.changedTouches.item(i).pageY;		
	}
}
//---------------------------------
function on_touch_move(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		context.beginPath();
		context.lineWidth = 1;
		context.arc(e.changedTouches.item(i).pageX - rect.left,
					e.changedTouches.item(i).pageY - rect.top,
					20,
					0, 2 * Math.PI
					);
		context.lineWidth = 40;			
		context.moveTo(lastX - rect.left, lastY - rect.top);
		context.lineTo(e.changedTouches.item(i).pageX - rect.left, 
						e.changedTouches.item(i).pageY - rect.top);

		lastX = e.changedTouches.item(i).pageX;		
		lastY = e.changedTouches.item(i).pageY;		
		context.stroke();			
	}	
}
