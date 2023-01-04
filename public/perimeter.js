function perimeter(i){
    var l = document.getElementById("v1").value;
    perimeter = 4*l;
    document.getElementById("after").innerHTML = `The perimeter of the square with length ${l} is ${perimeter}`;
}