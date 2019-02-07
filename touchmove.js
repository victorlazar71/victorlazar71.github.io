document.getElementById("id_logic_version").innnerHTML="Logic:2029.02.07.0";
var svg = document.getElementById("id_svg");
var cerc1= document.getElementById("id_circle1");
var cerc2= document.getElementById("id_circle2");
cerc1.addEvenitListener("touchmove",On_touch_move1);
cerc2.addEvenitListener("touchmove",On_touch_move2);
function on_touch_move1(e)
{
e.preventDefault();
cerc1.setAttribute("cx",e.changedTouches[0].pageX);
cerc1.setAttribute("cy",e.changedTouches[0].pageY-svd_rect.top);
  }
  function on_touch_move2(e)
{
e.preventDefault();
cerc2.setAttribute("cx",e.changedTouches[0].pageX);
cerc2.setAttribute("cy",e.changedTouches[0].pageY-svd_rect.top);
  }
  
