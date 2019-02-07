document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.07.3";
var svg = document.getElementById("id_svg");
svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);

var svg_rect = svg.getBoundingClientRect();

function on_touch_svg(e)
{
	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var patrat = document.createElementNS("http://www.w3.org/2000/svg", "square"); //creare element cerc in cazul nostru
		patrat.setAttribute("cx", e.changedTouches[i].pageX);  //atributele cercului cu valorile din paranteze
		patrat.setAttribute("cy", e.changedTouches[i].pageY - svg_rect.top);
		 patrat.setAttribute("r.",20);
		svg.appendChild(patrat);  // adaugare in svg ca si "copil" (subelement)

}
}