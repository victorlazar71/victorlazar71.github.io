
document.getElementById("id_logic_version").innerHTML = "Logic: 11.9";
var svg = document.getElementById("id_svg");
var patrat = document.getElementById("id_patrat");
var patrat1 = document.getElementById("id_patrat1");
var patrat2 = document.getElementById("id_patrat2");


patrat.addEventListener("touchmove", on_touch_move);
patrat.addEventListener("touchend", on_touch);
patrat1.addEventListener("touchmove", on_touch_move1);
patrat1.addEventListener("touchend", on_touch);
patrat2.addEventListener("touchmove", on_touch_move2);
patrat2.addEventListener("touchend", on_touch);

var svg_rect = svg.getBoundingClientRect();

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

function on_touch_move(e)
{
	var a = genereaza_culoare();
	e.preventDefault();
	patrat.setAttribute("x", e.changedTouches[0].pageX);
	patrat.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	patrat.setAttribute("fill", a);
	
}

function on_touch_move1(e)
{
	var a = genereaza_culoare();
	e.preventDefault();
	patrat1.setAttribute("x", e.changedTouches[0].pageX);
	patrat1.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	patrat1.setAttribute("fill", a);
	
}

function on_touch_move2(e)
{
	var a = genereaza_culoare();
	e.preventDefault();
	patrat2.setAttribute("x", e.changedTouches[0].pageX);
	patrat2.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	patrat2.setAttribute("fill", a);

}
function on_touch(e)
{
	alert("obiectul a fost mutat");
}
