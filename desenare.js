
		document.getElementById("id_logic_version").innerHTML = 
		"Logic version = 2018.12.04.3";
		
var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("touchmove", on_touch_move);
canvas.addEventListener("touchend", on_touch_end);


var rect = canvas.getBoundingClientRect();
//---------------------------------

//var lastX = 0;
//var lastY = 0;


var last_position_array = [];

//---------------------------------
function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}
//---------------------------------
function on_touch(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++){
		var context = canvas.getContext("2d");
		var last_position = {x: 0, y: 0, id: 0};
		last_position.x = e.changedTouches.item(i).pageX;		
		last_position.y = e.changedTouches.item(i).pageY;
		last_position.id = e.changedTouches.item(i).identifier;
		last_position.color = genereaza_culoare();
		
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = last_position.color;
		context.fillStyle = last_position.color;
		context.arc(e.changedTouches.item(i).pageX - rect.left,
					e.changedTouches.item(i).pageY - rect.top,
					10,
					0, 2 * Math.PI
					);
		context.fill();
		context.stroke();
		
		last_position_array.push(last_position);
	}
}
//---------------------------------
function on_touch_move(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++){
		
		var j = 0;
		for (; j < last_position_array.length; j++)
			if (last_position_array[j].id == e.changedTouches.item(i).identifier)
				break;
		
		var context = canvas.getContext("2d");
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = last_position_array[j].color;
		context.fillStyle = last_position_array[j].color;
		context.arc(e.changedTouches.item(i).pageX - rect.left,
					e.changedTouches.item(i).pageY - rect.top,
					10,
					0, 2 * Math.PI
					);
		context.fill();
		context.stroke();			
					
		context.beginPath();
		context.lineWidth = 20;		

			
		context.moveTo(last_position_array[j].x - rect.left, last_position_array[j].y - rect.top);
		context.lineTo(e.changedTouches.item(i).pageX - rect.left, 
						e.changedTouches.item(i).pageY - rect.top);
		context.strokeStyle = last_position_array[j].color;
		context.fillStyle = last_position_array[j].color;
		last_position_array[j].x = e.changedTouches.item(i).pageX;		
		last_position_array[j].y = e.changedTouches.item(i).pageY;		
		context.stroke();			
	}	
}
//---------------------------------
function on_touch_end(e)
{
	for (var i = 0; i < e.changedTouches.length; i++){
		var j = 0;
		
		for (; j < last_position_array.length; j++)
			if (last_position_array[j].id == e.changedTouches.item(i).identifier)
				break;
		
		last_position_array.splice(j, 1);
	}	
}
