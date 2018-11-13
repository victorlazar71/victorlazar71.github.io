ducument.getElement.ById("id_logic_version").innerHTML="Logic version 2018.11.13.1";

fuction on_ok(stream)
{
ducument .getElementById("id_video").srcObject = stream ;
}
function on_error(e)
{
  //console.log("erroare camere ");
alert("erroare camere ");
}


function star()
{
  var p =(audio:true, video:true);
navigator.mediaDevias.getuserMedia(p).then(on_ok).catch(n_error);
}
