function my_Dictionary() {
    var Animal = {
        Specifies: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}