// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'CAR'; // ALL CAPS
var isGuessingLetter = false;

// Ask player if they would like to guess a letter or guess the word
//var letterOrWord = prompt("Would you like to guess the letter or the word?", "Letter");
// If they are guessing a letter, set the letter that they are
// guessing.	
//if (letterOrWord == "Letter"){
	isGuessingLetter = true;
//		var letter = prompt("Enter the letter you would like to guess.",);
		letter = "T"
//	if (letter != "") {
	if (isGuessingLetter == true) {
		if (letter == "C") {
            console.log(Letter+"**");
		} else if (letter == "A") {
			console.log("*A*");
		} else if (letter == "T") {
			console.log("**T");
		} else {
			console.log("Sorry, no " + letter +"!");

		}
	
//	 } else if (Letter == ""){
//		 console.log("Please guess a letter!");
//	 }
		
//} else if (letterOrWord == "Word"){
	isGuessingLetter = false; 
	}else if (isGuessingLetter == false) {
	if (word == "CAR") {
       	console.log("Congratulations! You won Wheel Of Fortune!");
       }    
       else if (word != "CAR") {
       	console.log("Nope, keep trying!");
       }
}
	
 // set to false to guess solution

 // UPPERCASE

// SCRIPT ////////////////////////////////////////////////////////////

// If guessing a letter...

	// If the word contains the letter...

		// Print back the word with all instances of that letter revealed.

	// If the word does not contain the letter...

		// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.

// If guessing the word...

	// If they are correct...

		// Print "Congratulations! You won Wheel Of Fortune!"

	// If they are incorrect...

		// Print back "Nope, keep trying!"

// End of script!
