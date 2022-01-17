var wontime=0;
var losetime=0;

var n=parseInt(prompt("How many turn you want to play? :"))
for (let i = 1; i <=n; i++) {
    
    var inputNumber=parseInt(prompt( "Turn" + " "+ i + "  :  "+ "enter a number 1 to" + n) );

var rendom=Math.floor(Math.random()*n)+1; 
 if (inputNumber===rendom) {
    document.write("You have won ! " + "<br>" + "<br>")

     wontime++;
 }
 else{
    document.write("You have lose rendom number was"  + rendom  + "<br>" );
     losetime++
 }
}

document.write("You won" +  "  "+ wontime + "  " + "time" + "<br>" );
document.write("You lose" + "  "+ losetime + "  " + "time");
// almost onkey