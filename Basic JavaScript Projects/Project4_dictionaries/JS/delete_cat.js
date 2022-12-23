function my_Dictionary() { //Function to compute the value of my_Dictionary
    var Animal = { //variable animal has been given specific keys and values
        Species: "Cat",
        Color: "White",
        Breed: "Siamese",
        Age: 3,
        Sound: "Meow!",
    };
    delete Animal.Sound; //using delete operator to remove Animal.Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //document.write will display Animal.Sound, Meow!
}