/* metodos mas usados*/
document.getElementById("demo").innerHTML = "hello javaScript";
document.getElementById("demo").style.fontSize = "35px";

/* salidas de datos*/
window.alert(5+2);
console.log(6+2);

/* Declaraion */
let a,b,c;
a = 5;
b = 6;
c = a + b;
window.alert(c);
document.getElementById("demo").innerHTML = c;

/* variables */
let p,q,r;
 p = 5;
 q = 7;
const m = 8;
r = p + q + m;
document.getElementById("demo1").innerHTML = r;

/* tipos de datos*/
let num = 24;
let name = "yenifer perdomo";
let km = 14.5;// numero decimal
let iscolombiano = true;//booleano
let obj = {firstname: "ana",lastname:"perez"}//objeto

let y = 17  + "poo";
let unir = "17"+ "poo";
window.alert(y);
window.alert(unir);

/*definicion de funcion  */
function myfuncion(){
    document.getElementById("demo2").innerHTML = "new paragraph";
}