var num1;
var num2;

var operators = ["+", "-", "*", "/"];
var currentOperator;

var correctAnswer;

var correct = 0;
var incorrect = 0;

var possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomNum1;
var randomNum2;
var randomNum3;
var randomNum4;

var square1 = $("#topLeft");
var square2 = $("#topRight");
var square3 = $("#bottomLeft");
var square4 = $("#bottomRight");
var squares = [square1, square2, square3, square4];

var answerSquare;



// var answer = [Math.floor(Math.random() * .length)];

function randomNum(num){
	num = possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];
	return num;
}

// function correct(){
// // 	correct ++;
// // 	$("#correct").text("Correct Answers: " + correct)
// // 	setup();
// // }

// // function incorrect(){
// // 	incorrect ++;
// // 	$("#incorrect").text("Incorrect Answers: " + incorrect)
// // 	setup();
// // }

function setup(){
	currentOperator = operators[Math.floor(Math.random() * operators.length)];
	randomNum1 = randomNum(randomNum1);
	randomNum2 = randomNum(randomNum2);
	randomNum3 = randomNum(randomNum3);
	randomNum4 = randomNum(randomNum4);
	num1 = randomNum(num1);
	num2 = randomNum(num2);
	switch (currentOperator){
	case "+":
	correctAnswer = num1 + num2;
	break;
	case "-":
	correctAnswer = num1 - num2;
	break;
	case "*":
	correctAnswer = num1 * num2;
	break;
	case "/":
	correctAnswer = num1 / num2;
	break;
}
	for (var i = 0; i < squares.length; i++){
	squares[i].text(Math.floor(Math.random() * 20));
}
	answerSquare = squares[Math.floor(Math.random() * squares.length)];
	console.log(answerSquare);
	answerSquare.text(correctAnswer);
	$("#equation").text(num1 + currentOperator + num2)

}

setup();


$(".square").on("click", function(){
	console.log($(this).text())
	var selectedSquare = $(this).text();
	if (selectedSquare == correctAnswer){
		correct ++;
		$("#correct").text("Correct Answers: " + correct)
	} else {
		incorrect ++;
		$("#incorrect").text("Incorrect Answers: " + incorrect)
	}
	setup();
})






