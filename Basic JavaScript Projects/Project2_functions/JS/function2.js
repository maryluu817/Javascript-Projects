function myFunction() { // Function to compute the value of the variable and adds another value in sentence
    var sentence = "I am learning"; //Created a variable named sentence with the value, I am learning
    sentence += " so much on javascript!"; //Adds additional to the sentence 
    document.getElementById("Concatenate").innerHTML = sentence; //Displays sentence with the specified id Concatenate
}