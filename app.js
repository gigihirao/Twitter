var text = document.getElementById("textInput");
var counterNumbers = document.getElementsByClassName("showCounter")[0];
text.addEventListener("keyup", counter);

function tweet(){
    var hour = new Date();
    var time = hour.getHours() + ":" + hour.getMinutes() + ":" + hour.getSeconds(); 
    var item = document.createElement("li");
    item.innerHTML = time + "<br>" + text.value;
    var tweetList = document.getElementsByClassName('tweets')[0];
    tweetList.appendChild(item);
}

function enableBtn(){
    document.getElementById("btn").style.cursor = "pointer";
    document.getElementById("btn").style.opacity = "1";
    document.getElementById("btn").disabled = false;
}

function disableBtn(){
    document.getElementById("btn").style.cursor = "not-allowed";
    document.getElementById("btn").style.opacity = "0.3";
    document.getElementById("btn").disabled = true;
}

function counter(){
    var maxLength = 140;
    var restCharacters = maxLength - text.value.length;
    counterNumbers.innerHTML = restCharacters;
    if(restCharacters >= 0 || restCharacters < 140){
        enableBtn();
    }
    if(restCharacters <= 20){
        counterNumbers.style.color = "blue";
    } 
    if(restCharacters <= 10){
        counterNumbers.style.color = "#f2501d";
    }
    if(restCharacters <= 0){
        counterNumbers.style.color = "red";
    }
    if(restCharacters < 0 || restCharacters === 140){
        disableBtn();
    }
}

var textarea = null;
        window.addEventListener("load", function() {
            textarea = window.document.querySelector("textarea");
            textarea.addEventListener("keypress", function() {
                if(textarea.scrollTop != 0){
                    textarea.style.height = textarea.scrollHeight + "px";
                }
            }, false);
        }, false);