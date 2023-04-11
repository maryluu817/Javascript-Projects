function Play_Function() {
    var Height, Can_play;
    Height = document.getElementById("Height").value;
    Can_play = (Height <40) ? "You are short enough":"You are too tall";
    document.getElementById("Play").innerHTML = Can_play + " to play.";

}