document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.07.8";
var svg = document.getElementById("id_svg");
svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);

var svg_rect = svg.getBoundingClientRect();

function on_touch_svg(e)
{
	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var cub = document.createElementNS("http://www.w3.org/2000/svg", "rect");	
		cub.setAttribute("x", e.changedTouches[i].pageX);  //atributele cercului cu valorile din paranteze
		cub.setAttribute("y", e.changedTouches[i].pageY - svg_rect.top);
		cub.setAttribute("width", 50);
		cub.setAttribute("height", 50);
		cub.setAttribute("fill", color);
		svg.appendChild(cub)// adaugare in svg ca si "copil" (subelement)
		cub.clearRect(0, 0, 50, 50);
		var loopTimer = setTimeout("on_touch_svg("+e.changedTouches[i].pageX+", "+e.changedTouches[i].pageY - svg_rect.top+")", 200);
		

}
}
