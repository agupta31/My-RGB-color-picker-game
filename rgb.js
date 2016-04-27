
var squares=document.querySelectorAll('.squares');
var rgbText=document.getElementById('rgbText');
var newColor=document.getElementById('newColor');
var message=document.getElementById('msg');
var easyButton=document.querySelector('#easyButton');
var hardButton=document.querySelector('#hardButton');
var instructions=document.getElementById('instructions');
var close=document.getElementById("close");
var index=6;
var self;

function init(){
generateRandomColor(index);
selectSquares(index);
}
//attaches the random color generator to the new color button
newColor.addEventListener("click",function(){
  message.textContent=" ";
//calling the setIndex function to set the index.
  setIndex();
//calling the random color generator in order to fill the colors
  generateRandomColor(index);
  showHide(self);
  
});

//specifies what should be done when you click the easy button
 easyButton.addEventListener("click",function(){
   message.textContent=" ";
//storing the currently chosen button in another variable so as to access it elsewhere
    self=this;
    index=3;
    generateRandomColor(index);
    showHide(this);
    
 });
 //specifies the chain of evnets that shall take place when a user clicks on the
 //hard button.
hardButton.addEventListener("click",function(){
   
   message.textContent=" ";
   self=this;
   index=6;
   generateRandomColor(index);
   showHide(this);
});
 
 instructions.addEventListener("click",function(){
      document.querySelector(".message").style.display="block";

 });

 close.addEventListener("click",function(){
         document.querySelector(".message").style.display="none";
 });

 
//this function is used to specify the action that happens when you click on each square
function selectSquares(index){

for(var i=0;i<index;i++){

squares[i].addEventListener("click",function(){

   if(rgbText.innerHTML!==this.style.background){
      this.style.background= "#232323";
      message.textContent="Try again";
    }
    else{
      //function which fills all the squares with the same color
        fillSameColor(this.style.background,index);
         message.textContent="Correct";
      }

});
}
}
//fills the squares with random rgb colors
function generateRandomColor(index){
      
      for(var i=0;i<index;i++)
          squares[i].style.background=colorChooser();

    //sets the span tag to a random rgb color
    rgbText.innerHTML= squares[Math.floor(Math.random()*index)].style.background;
}

//generates random red,green and blue colors and returns them as a string
function colorChooser(){

     var red=Math.floor(Math.random()*256);
     var green=Math.floor(Math.random()*256);
     var yellow=Math.floor(Math.random()*256);

     return "rgb(" + red + ", " + green + ", " + yellow + ")";

}
//gets called when a matching square is found and fills all the squares with that matching color
function fillSameColor(colorFill,index){
  for(var i=0;i<index;i++)
      squares[i].style.background=colorFill;
  
}
//this function shows/hides the divs based on the selected difficulty level

function showHide(chosenButtn){
  if(chosenButtn===easyButton){

  for(var i=index;i<squares.length;i++)
        squares[i].style.display="none";
    }
    else{
      for(var i=0;i<squares.length;i++)
         squares[i].style.display="block";
     }
}
//function which sets the index according to the chosen difficulty level
function setIndex(){
   if(self===easyButton)
     index=3;
   else
     index=6;
}
window.onload=init;