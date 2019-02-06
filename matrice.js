document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.02.06.1";


function citeste()
{
	var a1 = document.getElementById("id_a1").value;
	var a2 = document.getElementById("id_a2").value;
	var a3 = document.getElementById("id_a3").value;
  	var a11 = document.getElementById("id_a11").value;
    	var a12 = document.getElementById("id_a12").value;
	var a13 = document.getElementById("id_a13").value;
    	var a21 = document.getElementById("id_a21").value;
	var a22 = document.getElementById("id_a22").value;
    	var a23 = document.getElementById("id_a23").value;
      	var a31 = document.getElementById("id_a31").value;
        var a32 = document.getElementById("id_a32").value;
        var a 33 = document.getElementById("id_a33").value; 
        
        var coeficienti = {a1:a1, a2:a2, a3:3,a11:a11, a12:a12, a13:a13, a21:a21,  a22:a22,  a23:a23,  a31:a31,  a32:a32,  a33:a33 };
	return coeficienti;
}
function calculeaza(coeficienti)
{
	var delta = coeficienti.a11* coeficienti.a22* coeficienti.a33 + coeficienti.a21*coeficienti.a32*coeficienti.a13+coeficienti.a31*coeficienti.a12*coeficienti.a23-coeficienti.a13* coeficienti.a22* coeficienti.a31 -coeficienti.a23*coeficienti.a32*coeficienti.a11-coeficienti.a33*coeficienti.a12*coeficienti.a21;
	
	var x, y, z ;
	if (delta ><0){
		x =  (coeficienti.a1* coeficienti.a22* coeficienti.a33 + coeficienti.a2*coeficienti.a32*coeficienti.a13+coeficienti.a3*coeficienti.a12*coeficienti.a23-coeficienti.a13* coeficienti.a22* coeficienti.a3 -coeficienti.a23*coeficienti.a32*coeficienti.a1-coeficienti.a33*coeficienti.a12*coeficienti.a2)/delta;
	
		y =  (coeficienti.a11* coeficienti.a2* coeficienti.a33 + coeficienti.a21*coeficienti.a3*coeficienti.a13+coeficienti.a31*coeficienti.a1*coeficienti.a23-coeficienti.a13* coeficienti.a2* coeficienti.a31 -coeficienti.a23*coeficienti.a3*coeficienti.a11-coeficienti.a33*coeficienti.a1*coeficienti.a21)/delta;
	
		z = (coeficienti.a11* coeficienti.a22* coeficienti.a3 + coeficienti.a21*coeficienti.a32*coeficienti.a1+coeficienti.a31*coeficienti.a12*coeficienti.a2-coeficienti.a1* coeficienti.a22* coeficienti.a31 -coeficienti.a23*coeficienti.a2*coeficienti.a11-coeficienti.a3*coeficienti.a12*coeficienti.a21)/delta;
	
    
	}

	var solutii = {x: x, y:y,z:z};
	return solutii;
}
function afiseaza(solutii)
{
	document.getElementById("id_x").innerHTML = solutii.x;
	document.getElementById("id_y").innerHTML = solutii.y;
        document.getElementById("id_z").innerHTML = solutii.z;
}

function rezolva()
{
	var coeficienti = citeste();
	var solutii = calculeaza(coeficienti);
	afiseaza(solutii);
}
