const numberZero = document.querySelector("#button-0");
const numberOne = document.querySelector("#button-1");
const numberTwo = document.querySelector("#button-2");
const numberThree = document.querySelector("#button-3");
const numberFour = document.querySelector("#button-3");
const numberFive = document.querySelector("#button-4");
const numberSix = document.querySelector("#button-5");
const numberSeven = document.querySelector("#button-6");
const numberEight = document.querySelector("#button-7");
const numberNine = document.querySelector("#button-8");
const decimalKey = document.querySelector("#button-9");

const clearKey = document.querySelector("#button-clear");
const multiplyKey = document.querySelector("#button-mul");
const divideKey = document.querySelector("#button-div");
const addKey = document.querySelector("#button-add");
const subtractKey = document.querySelector("#button-sub");
const equalsKey = document.querySelector("#button-equals");

const currentDisplay = document.querySelector(".current");
const equationDisplay = document.querySelector(".equation");
const totalDisplay = document.querySelector(".total");

let equation = [];
const operatorCheck = ["+", "-", "*", "/"];
let solution = 0;
let addedDecimal = false;
let totalled = false;

function pressedZero() {
	if (totalled) {
		clear();
	}
	{
		if (currentDisplay.innerHTML.length <= 9) {
			if (
				currentDisplay.innerText === "0" ||
				operatorCheck.includes(currentDisplay.innerText)
			) {
				currentDisplay.innerText = 0;
			} else currentDisplay.innerText += 0;
		} else {
			currentDisplay.innerText = "Over Digital Limit";
			currentDisplay.classList.add("over-limit");
			setTimeout(() => {
				currentDisplay.innerText = 0;
				currentDisplay.classList.remove("over-limit");
			}, 1500);
		}
	}
}

function pressedOne() {
	if (totalled) {
		clear();
	}
	{
		if (currentDisplay.innerHTML.length <= 9) {
			if (
				currentDisplay.innerText === "0" ||
				operatorCheck.includes(currentDisplay.innerText)
			) {
				currentDisplay.innerText = 1;
			} else currentDisplay.innerText += 1;
		} else {
			currentDisplay.innerText = "Over Digital Limit";
			currentDisplay.classList.add("over-limit");
			setTimeout(() => {
				currentDisplay.innerText = 0;
				currentDisplay.classList.remove("over-limit");
			}, 1500);
		}
	}
}

function pressedTwo() {
	if (totalled) {
		clear();
	}
	{
		if (currentDisplay.innerHTML.length <= 9) {
			if (
				currentDisplay.innerText === "0" ||
				operatorCheck.includes(currentDisplay.innerText)
			) {
				currentDisplay.innerText = 2;
			} else currentDisplay.innerText += 2;
		} else {
			currentDisplay.innerText = "Over Digital Limit";
			currentDisplay.classList.add("over-limit");
			setTimeout(() => {
				currentDisplay.innerText = 0;
				currentDisplay.classList.remove("over-limit");
			}, 1500);
		}
	}
}

function pressedDecimal() {
	if (totalled) {
		clear();
	}
	{
		if (currentDisplay.innerHTML.length <= 9) {
			if (
				currentDisplay.innerText === "0" ||
				operatorCheck.includes(currentDisplay.innerText)
			) {
				currentDisplay.innerText = "0.";
			} else if (addedDecimal)
				currentDisplay.innerText = currentDisplay.innerText;
			else currentDisplay.innerText += ".";
			addedDecimal = true;
		} else {
			currentDisplay.innerText = "Over Digital Limit";
			currentDisplay.classList.add("over-limit");
			setTimeout(() => {
				currentDisplay.innerText = 0;
				currentDisplay.classList.remove("over-limit");
			}, 1500);
		}
	}
}

function clear() {
	currentDisplay.innerText = 0;
	currentDisplay.classList.remove("total");
	equationDisplay.innerText = 0;
	equation.splice(0, equation.length);
	totalled = false;
	addedDecimal = false;
	// solution = 0;
}

function pressedAdd() {
	if (totalled) {
		clear();
		equation.push(solution);
		equation.push("+");
	}
	equationDisplay.innerText = "0";
	if (currentDisplay.innerText !== "0") {
		equation.push(currentDisplay.innerText);
		equation.push("+");
		currentDisplay.innerText = "+";
	}
	equationDisplay.innerText = equation.join("");
	addedDecimal = false;
}

function pressedSubtract() {
	if (totalled) {
		clear();
		equation.push(solution);
		equation.push("-");
	}
	equationDisplay.innerText = "0";
	if (currentDisplay.innerText !== "0") {
		equation.push(currentDisplay.innerText);
		equation.push("-");
		currentDisplay.innerText = "-";
	}
	equationDisplay.innerText = equation.join("");
	addedDecimal = false;
}

function pressedMultiply() {
	if (totalled) {
		clear();
		equation.push(solution);
		equation.push("*");
	}
	equationDisplay.innerText = "0";
	if (!operatorCheck.includes(currentDisplay.innerText)) {
		equation.push(currentDisplay.innerText);
		equation.push("*");
		currentDisplay.innerText = "*";
	}
	equationDisplay.innerText = equation.join("");
	addedDecimal = false;
}

function pressedDivide() {
	if (totalled) {
		clear();
		equation.push(solution);
		equation.push("/");
	}
	equationDisplay.innerText = "0";
	if (!operatorCheck.includes(currentDisplay.innerText)) {
		equation.push(currentDisplay.innerText);
		equation.push("/");
		currentDisplay.innerText = "/";
	}
	equationDisplay.innerText = equation.join("");
	addedDecimal = false;
}

function equals() {
	if (!operatorCheck.includes(currentDisplay.innerText)) {
		equation.push(currentDisplay.innerText);
	}
	if (equation.length % 2 === 0) equation.pop();
	let equationString = equation.join("");
	console.log(equationString);
	solution = parseFloat(eval(equationString).toFixed(9));
	currentDisplay.innerText = solution;
	totalled = true;
	currentDisplay.classList.add("total");
	equationDisplay.innerText = equationString + "=" + solution;
}

window.addEventListener("keydown", (e) => {
	// console.log(e.key);
	switch (e.key) {
		case "1":
			pressedOne();
			break;
		case "2":
			pressedTwo();
			break;
		case "3":
			pressedThree();
			break;
		case "4":
			pressedFour();
			break;
		case "5":
			pressedFive();
			break;
		case "6":
			pressedSix();
			break;
		case "7":
			pressedSeven();
			break;
		case "8":
			pressedEight();
			break;
		case "9":
			pressedNine();
			break;
		case "0":
			pressedZero();
			break;
		case ".":
			pressedDecimal();
			break;
		case "Delete":
		case "c":
		case "C":
			clear();
			break;
		case "+":
		case "A":
		case "a":
			pressedAdd();
			break;
		case "-":
		case "S":
		case "s":
			pressedSubtract();
			break;
		case "*":
		case "M":
		case "m":
			pressedMultiply();
			break;
		case "/":
		case "D":
		case "d":
			pressedDivide();
			break;
		case "=":
		case "Enter":
			equals();
			break;
		case "Backspace":
			backspace();
			break;
	}
});

numberOne.addEventListener("click", pressedOne);
numberTwo.addEventListener("click", pressedTwo);

addKey.addEventListener("click", pressedAdd);
subtractKey.addEventListener("click", pressedSubtract);
multiplyKey.addEventListener("click", pressedMultiply);
divideKey.addEventListener("click", pressedDivide);

clearKey.addEventListener("click", clear);

equalsKey.addEventListener("click", equals);
