document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.01.15.0";
window.addEventListener("devicelight",on_linght_change)
function on_linght_change(e)
{
document.getElementBYId("id_light").innerHTML=e.value+"["+e.min+","+e.max"]"
}
