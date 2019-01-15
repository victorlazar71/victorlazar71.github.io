
document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.01.15.4"
function citeste()
var a,b,c;
var x1_re, x2_re, x1_im, x2_im;
{
ar a = document.getElementById("id_a").value;
var b = document.getElementById("id_b").value;
var c = document.getElementById("id_c").value;

}
function calculeaza()
{
var delta = b * b - 4 * a * c;
var x1_re, x2_re, x1_im, x2_im;

if (delta >= 0){
x1_re = (-b + Math.sqrt(delta)) / (2 * a * c);
x2_re = (-b - Math.sqrt(delta)) / (2 * a * c);
x1_im = 0;
x2_im = 0;
}
else{
	x1_re = (-b) / (2 * a * c);
x2_re = (-b) / (2 * a * c);

x1_im = (+ Math.sqrt(-delta)) / (2 * a * c);
x2_im = (- Math.sqrt(-delta)) / (2 * a * c);
}

}
function afisare()
{
document.getElementById("id_x1").value = x1_re;
if (x1_im != 0)
document.getElementById("id_x1").value += "+" + x1_im + "i";

document.getElementById("id_x2").value = x2_re;
if (x2_im > 0)
document.getElementById("id_x2").value += "+" + x2_im + "i";
else
if (x2_im < 0)
document.getElementById(“id_x2”).value += x2_im + "i";
}

}
function rezolva()
{
citeste();
calculeaza();
afiseaza();
}
