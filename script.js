var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var btn = document.createElement("button");
btn.appendChild(document.createTextNode("Random"));
body.appendChild(btn);

function init(){
	color1.value="#ff0000";
	color2.value="#ffff00";

	setGradient();
	textContent();
}

function randomColorsGen(){
	var l = "01234567890ABCDEF";
	var c = "#";
	for(var i=0; i<6;i++){
		c+=l[Math.floor(Math.random()*16)];
	}
	return c;
}

function randomColorsSet(){
	color1.value=randomColorsGen();
	color2.value=randomColorsGen();

	setGradient();
}

function setGradient(){
	body.style.background = "linear-gradient(to right," + color1.value +", "+ color2.value +")";
	textContent();
}

function textContent(){
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

init();

btn.addEventListener("click", randomColorsSet);



const array = [1,2,6,10];
const double =[];
const newArr = array.forEach((num)=>{
	double.push(num*2);
});