// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;
var hitNeeded =  17;
var hitCount = 0;
var ship;

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9,
	"a": 0,
	"b": 1,
	"c": 2,
	"d": 3,
	"e": 4,
	"f": 5,
	"g": 6,
	"h": 7,
	"i": 8,
	"j": 9
}
var letterArray = ["A","B","C","D","E","F","G","H","I","J"];

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";





		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE

		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;
		square.textContent = letterArray[j] + (i + 1);

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';

	}
}

// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]

				function placeBoat () {
			 	 var placingBoat = $("#placeBoatBox").val();
				 console.log("placingboat is " + placingBoat)
			 	 document.getElementById("placeBoatBox").value = null;
			 	 var convertLetterToNumber = placingBoat.substring(0,1);

			 	 convertLetterToNumber = letterConversion[convertLetterToNumber];
				 console.log(convertLetterToNumber)
			 	  collumn = placingBoat.substring(1,3) - 1;
				 console.log(collumn)
				 direction = placingBoat.substring(4,10);
				 var placingBoat2 = $("#placeBoatBox2").val();
				 document.getElementById("placeBoatBox").value = null;
				 ship = placingBoat2.substring(0);

				 if(gameBoard[convertLetterToNumber][collumn] == 0){
			 		 gameBoard[convertLetterToNumber][collumn] = 1;
			 	 }

				/* if(direction == "down" && ship == carrier){
					 for (i = 0; i < 4;i++){
					 gameBoard[convertLetterToNumber - 1][collumn]
				 }
				 }
				 else if (direction == "up" && ship == carrier){
					 for (i = 0; i < 4;i++){
					 gameBoard[convertLetterToNumber + 1][collumn]
				 }
				 }
				 else if (direction == left && ship == carrier){
					 for (i = 0; i < 4;i++){
					 gameBoard[convertLetterToNumber][collumn - 1]
				 }
				 }
				 else if (direction == right && ship == carrier){
					 for (i = 0; i < 4;i++){
					 gameBoard[convertLetterToNumber][collumn + 1]
				 }
			 }*/


			 }


function fireTorpedo() {
		var gameOver = false;
		var	userInput = document.getElementById("fireBox").value;
		console.log(userInput);
		document.getElementById("fireBox").value = null;
		var	convertLetterToNumber = userInput.substring(1,0);
		convertLetterToNumber = letterConversion[convertLetterToNumber];
		console.log(convertLetterToNumber);

		var collumn = userInput.substring(1,3) - 1;
		//document.getElementById("s" + convertLetterToNumber + collumn).style.backgroundColor = "black";

		if (gameBoard[convertLetterToNumber][collumn] == 1){
				document.getElementById("s" + convertLetterToNumber + collumn).style.backgroundColor = "red";
				hitCount += 1;
				document.getElementById("hitBox").textContent = ((17 - hitCount) + " remaining!");
				console.log(hitCount);
		}
		else {
				document.getElementById("s" + convertLetterToNumber + collumn).style.backgroundColor = "black";
				hitCount = hitCount;
				document.getElementById("hitBox").textContent = ((17 - hitCount) + " remaining!");
		}
		if (hitCount == 17){
				gameOver = true;
		}
		if(gameOver == true) {
			$("#instructions").text("YOU SUNK ALL MY BATTLESHIPS!");
			$("#fireBox").fadeOut();
			$("#hitBox").fadeOut();
		}

}
