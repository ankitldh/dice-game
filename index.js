var random1 = Math.floor(Math.random()*6)+1;
var img1 = "images/dice" + random1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src",img1);

var random2 = Math.floor(Math.random()*6)+1;
var img2 = "images/dice" + random2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src",img2);

if (random1 > random2) {
    document.querySelectorAll("h1")[0].innerHTML = " 😎 player 1 wins 😎"
    document.querySelectorAll("h1")[1].innerHTML = " 🥺 player 2 loose 🥺"
    
}else if (random1 < random2) {
    document.querySelectorAll("h1")[1].innerHTML = " 😎 player 2 wins 😎"
    document.querySelectorAll("h1")[0].innerHTML = " 🥺 player 1 loose 🥺"
    
}else{
    document.querySelectorAll("h1")[0].innerHTML = " 😜 match draw 😜"
    document.querySelectorAll("h1")[1].innerHTML = " 😜 match draw 😜"

}


