function Purse(Make, Model, Year, Color) {
    this.Purse_Make = Make;
    this.Purse_Model = Model;
    this.Purse_Year = Year;
    this.Purse_Color = Color;
}
var John = new Purse("Chanel", "Tote", 2020, "Red");
var Emily = new Purse("Gucci", "Satchel", 2019, "Black");
var Erik = new Purse("Coach", "Clutch", 1971, "Pink");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik carries a " + Erik.Purse_Color + "-colored " + Erik.Purse_Model +
    " manufactured in " + Erik.Purse_Year;
}