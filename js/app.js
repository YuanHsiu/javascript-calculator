
var prevResult = 0;
var prevop = "=";
var digitappend = false;

function clearDisplay()
{
	document.calculator.display.value = 0;
	prevResult = 0;
	prevop = "=";
	digitappend = false;
}

function digit(digit)
{
	if (digitappend) {
		document.calculator.display.value += digit;
	} else {
		document.calculator.display.value = digit;
		digitappend = true;
	}
}

function doOp(op)
{
	if (prevop == "+") {
		prevResult += eval(document.calculator.display.value);
	} else if (prevop == "-") {
		prevResult -= eval(document.calculator.display.value);
	} else if (prevop == "*") {
		prevResult *= eval(document.calculator.display.value);
	} else if (prevop == "/") {
		prevResult /= eval(document.calculator.display.value);
	} else if (prevop == "=") {
		prevResult = eval(document.calculator.display.value);
	}
	document.calculator.display.value = prevResult;
	digitappend = false;
	prevop = op;
}


