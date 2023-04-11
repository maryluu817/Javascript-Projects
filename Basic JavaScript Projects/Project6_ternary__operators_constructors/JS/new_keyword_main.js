function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height <52) ? "You are too short":"You are tall enough";
    document.getElementById("New_and_This").innerHTML = Can_ride + " to ride.";

}