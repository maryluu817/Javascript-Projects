function let_Function(){
    var X = 90;
    document.write(X);
    {
        let X = 30;
        document.write("<br>" + X);
    }
    document.write ("<br>" + X);
    
}
