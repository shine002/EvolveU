console.log("Hello World from basic.js");


document.getElementById("button").addEventListener("click", onButtonClicked)
function onButtonClicked(){
    console.log("I’m in the button click event");
}





document.getElementById("button").addEventListener("click", function() {
var x = document.getElementById("input").value
x++;
console.log(x);
})

// document.getElementById("button").addEventListener("click", size)

function size(){
    var x = document.getElementById("input").value;
    if (x<10){
        // console.log("small");
        document.getElementById("result").innerHTML= "Small";
    }
    else if (x>=10 && x<=19){
        // console.log("Med");
        document.getElementById("result").innerHTML= "Med";
    }
    else {
        // console.log("Large");
        document.getElementById("result").innerHTML= "Large";
    }
}


