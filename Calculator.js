

function clearButton() {
	var txt = document.getElementById("numbers");
	txt.value = "";
	ans = 0;
	console.log(ans);
}

function decimalButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	//we need to convert the string into a decimal here
}

function zeroButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function oneButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function twoButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function threeButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function fourButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function fiveButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
}

function sixButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
}

function sevenButton(number) {
	var txt = document.getElementById("numbers");
	txt.value =  txt.value + "" + number;
	var theNumber = parseFloat(txt);
	
}

function eightButton(number) {
	var txt = document.getElementById("numbers");
	txt.value = txt.value + "" + number;
	var theNumber = parseFloat(txt);

}

function nineButton(number) {
	var txt = document.getElementById("numbers");
	txt.value = txt.value + "" + number;
	var theNumber = parseFloat(txt);
	
}

/*******************************************/

//Operators
var ans;

function addition(numbers)
{
	ans = parseFloat(numbers);
	var txt = document.getElementById("numbers");
	txt.value = "";
	console.log(ans);
	document.getElementById("equal").addEventListener("click", equalAddition);
}
	
function equalAddition()
{
	var txt = document.getElementById("numbers");
	var number = parseFloat(txt.value);
	ans = ans + number;
	txt.value = ans;
	console.log("equalAddition " + ans);
	document.getElementById("equal").removeEventListener("click", equalAddition);
}

function subtraction(numbers)
{
	ans = parseFloat(numbers);
	var txt = document.getElementById("numbers");
	txt.value = "";
	console.log(ans);
	document.getElementById("equal").addEventListener("click", equalSubtraction);
}

function equalSubtraction()
{
	var txt = document.getElementById("numbers");
	var number = parseFloat(txt.value);
	ans = ans - number;
	txt.value = ans;
	console.log("equalSubtraction " + ans);
	document.getElementById("equal").removeEventListener("click", equalSubtraction);
}
	
function multiplication(numbers)
{
	ans = parseFloat(numbers);
	var txt = document.getElementById("numbers");
	txt.value = "";
	console.log(ans);
	document.getElementById("equal").addEventListener("click", equalMultiplication);
}
	
function equalMultiplication()
{
	var txt = document.getElementById("numbers");
	var number = parseFloat(txt.value);
	ans = ans * number;
	txt.value = ans;
	console.log("equalMultiplication " + ans);
	document.getElementById("equal").removeEventListener("click", equalMultiplication);
}

function division(numbers) 
{
	ans = parseFloat(numbers);
	var txt = document.getElementById("numbers");
	txt.value = "";
	console.log(ans);
	document.getElementById("equal").addEventListener("click", equalDivision);
}

function equalDivision()
{
	var txt = document.getElementById("numbers");
	var number = parseFloat(txt.value);

	if(number == 0) 
	{
		txt.value = "Error";
		ans = 0;
	}
	else
	{
		ans = ans / number;
		txt.value = ans;
	}
	console.log("equalDivision " + ans);
	document.getElementById("equal").removeEventListener("click", equalDivision);
}