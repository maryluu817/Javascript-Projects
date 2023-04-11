function nest_Function() {
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() {
        var Starting_point = 11;
        function Plus_Three() {Starting_point += 3;}
        Plus_Three();
        return Starting_point;
    }

}