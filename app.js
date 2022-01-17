var wontime=0;
var losetime=0;
for (let i = 0; i < 6; i++) {
    
    var inputNumber=parseInt(prompt("enter a number 1 to 5 :"));

var rendom=Math.floor(Math.random()*5)+1; 
 if (inputNumber===rendom) {
    document.write("You have won ! " + "<br>")

     wontime++;
 }
 else{
    document.write("You have lose rendom number was"  + rendom  + "<br>");
     losetime++
 }
}

document.write("You won"+ wontime +"time" + "<br>");
document.write("You lose"+ losetime +"time");