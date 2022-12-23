function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        Color: "White",
        Breed: "Siamese",
        Age: 3,
        Sound: "Meow!",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}