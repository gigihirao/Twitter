function tweet(){
    var text = document.getElementById("textInput").value;
    var item = document.createElement("li");
    item.textContent = text;
    var tweetList = document.getElementsByClassName('tweets')[0];
    tweetList.appendChild(item);
    console.log(text);
}
