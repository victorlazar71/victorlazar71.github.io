document.getElementById("id_logic_version").innerHTML = "Logic version: 2000.00.00.3";

var svg = document.getElementById("id_svg");

svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);

//canvas.addEventListener("touchmove", on_touch_move);
//canvas.addEventListener("touchend", on_touch_end);

var svg_rect = svg.getBoundingClientRect();
var reqID, x=0;

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

function on_touch_svg(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var color = genereaza_culoare();
		var cub = document.createElementNS("http://www.w3.org/2000/svg", "rect");	
		cub.setAttribute("x", e.changedTouches[i].pageX);  //atributele cercului cu valorile din paranteze
		cub.setAttribute("y", e.changedTouches[i].pageY - svg_rect.top);
		cub.setAttribute("width", 120);
		cub.setAttribute("height", 50);
		cub.setAttribute("fill", color);
		svg.appendChild(cub);  // adaugare in svg ca si "copil" (subelement)
		
}
}
