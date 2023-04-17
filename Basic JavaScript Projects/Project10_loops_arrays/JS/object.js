let airplane = {
  make:"Boeing ",
  model: "720 ",
  year: "2020 ",
  color : "white ",
  description: function(){
    return "The airplane is a " + this.year + this.color + this.make + this.model;
  }
};
document.getElementById("airplane_object").innerHTML= airplane.description();
