document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.01.22.2";
function onSuccess(heading)
{
    var element = document.getElementById('heading');
    myHeading = (heading.magneticHeading).toFixed(2);
    console.log("My Heading = " + myHeading);
}
function onError(compassError) {
    alert('Compass error: ' + compassError.code);
}
var options = {
    frequency: 500
}

watchID = navigator.compass.watchHeading(onSuccess, onError, options);
