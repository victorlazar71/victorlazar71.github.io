document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.08.2";
var svg = document.getElementById("id_svg");
var cerc = document.getElementById("id_circle");

cerc.addEventListener("touchmove", on_touch_move);
var svg_rect = svg.getBoundingClientRect();

function on_touch_move(e)
{
	e.preventDefault();
	cerc.setAttribute("cx", e.changedTouches[0].pageX);
	cerc.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
