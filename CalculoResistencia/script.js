function FazerCalculo(){
let val01 = parseFloat(document.getElementById('faixa01').value);
let val02 = parseFloat(document.getElementById('faixa02').value);
let val03 = parseFloat(document.getElementById('Multi').value);
let val04 = parseFloat(document.getElementById('Toler').value);


let result = ((val01*10) + val02) * val03; 
let tol1 = result - val04
let tol2 = result + val04;
let tol3 = val04

document.getElementById("resultado").value = result+"Ω";
document.getElementById("toleran").value = tol1+"Ω até "+tol2+"Ω";
document.getElementById("toln").value = tol3+"Ω";
}