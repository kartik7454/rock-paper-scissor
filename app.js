$("button").click(function(event){
  var randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
  var choice = "rock";
  var choicediv = "rockdiv";
} else if (randomNumber === 2) {
  var choice = "paper";
  var choicediv = "paperdiv"
} else {
   var  choice = "scissors";
   var choicediv = "scissordiv";
}
$(".game").addClass("nobg")

  var myvalue =(event.target.className);

 var ichose= event.target.parentElement.className
console.log(ichose)


if (myvalue === choice) {
      var result= ("TIE!");
    } else if ((myvalue === "rock" && choice === "scissors") ||
               (myvalue === "paper" && choice === "rock") ||
               (myvalue === "scissors" && choice === "paper")) {
      var result= ("YOU WIN!");
    } else {
    var  result=("YOU LOOSE!");
    }


  $(".game").html( ' <h1 class = "ycp">you chose</h1> <div class=" ' +ichose+ ' positionychose "><button type="button" class="' +myvalue+' " name="button"></button></div> <h1 class = "positionresult">'+result+'</h1> <button type="button" class="positonbtn " onclick="history.go(0)" name="button">play again</button> <div class=" ' +choicediv+ ' positionhchose  "><button type="button" class="' +choice+' " name="button"></button></div> <h1 class = "hcp">house chose</h1>  ' )



})
