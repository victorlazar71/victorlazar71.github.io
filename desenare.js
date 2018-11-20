document.getElementById("id_logic_version ") .innerHTML= "Logic version= 2018.11.20.5";
var canvas =document.getElementById("id_canvas");
canvas .addEventListener("touchstar",on_touch);
 var rect = canvas.getBoundingClientRect();

function on_touch(e)

{
for (var i=0:i<e.changedTouches.length ;i++)
var canvas =canvas.get.Context(2d);
contex.beginPath();
   context.art( e.changedTouches.item(i).pageX-rect.lift
      ,e.changedTouches.item(i).pageY-rect.top ,20,0 2*Match.PI);
}
context.stroke();
