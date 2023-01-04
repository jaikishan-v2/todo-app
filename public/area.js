function area(i){
    var l = document.getElementById("v1").value;
    area = l*l;
    document.getElementById("after").innerHTML = `The area of the square with length ${l} is ${area}`;
}