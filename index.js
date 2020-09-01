function clock(){
    var time = new Date().toLocaleTimeString();
    return document.querySelector("h1").innerHTML = time;

}

setInterval(clock, 1000);

var year = new Date().getFullYear();

document.querySelector("footer").innerHTML = "Copyright &copy; Rajesh Poojari " + year;

