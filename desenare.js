document.getElementBydo("id_logic_version ") .innerHTML= "Logic version= 2018.11.20.1";
var canvas =document.getElementBydo("id_canvas");
canvas .addEventListener("touchstar",on_touch);
function on_touch(e)

{
for (var i=0:i<e.changed touches.length:i++);
var canvas =canvas.get.Context(2d);
contex.beginPath();
   context.art( e.changed touches.item(i).pageX,e.changed touches.item(i).pageY ,20,0 2*Match.Pi);
}
context.stroke();
