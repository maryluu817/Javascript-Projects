function Age_Function() {
    Age = document.getElementById("Age").value ;
    if (Age>= 18) {
        Learn = "You have a lot of wisdom.";

    }
    else {
        Learn = "You still have a lot to learn.";

    }
    document.getElementById("How_old_are_you?").innerHTML = Learn;
}
