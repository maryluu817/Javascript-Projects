function constant_Function(){
    const car ={type: "suv ", brand: "Toyota ", color: "black "};
    car.color = "red";
    car.price = "$15,000.";
    document.getElementById("constant").innerHTML = "The cost of the " + car.type + "was " + car.price;
    
}
