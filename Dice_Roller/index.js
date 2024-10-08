alert("hello Vipan");
var randowNumber1 = Math.floor(Math.random()*6)+1;
var randomDice ="images/"+"dice"+randowNumber1+".png";
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDice);


var randowNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 ="images/"+"dice"+randowNumber2+".png";
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDice2);

if (randowNumber1>randowNumber2){
    document.querySelector("h1").innerHTML="😘Player 1 Wins";

}
else if(randowNumber1<randowNumber2) {
    document.querySelector("h1").innerHTML="😘Player 2 Wins";


}
else{
    document.querySelector("h1").innerHTML="Aww its a tie";
}
 


