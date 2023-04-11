function count_Function() {
    document.getElementById("Counting").innerHTML= Count();
    function Count() {
        var Starting_point = 9;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }

}