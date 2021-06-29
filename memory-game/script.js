const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let value1 = '';
let value2 = '';
let temp1;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
  
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {

  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  //change background color to the color value of the array
  event.target.style.backgroundColor = event.target.className;

  if(value1==''){
    event.target.setAttribute('id','one');
    value1 = event.target.className;
    console.log(`the value kept for click 1 is ${value1} and click 2 is ${value2}`);
  }
  else if(value2=='' && event.target.id!='one')
  {
    value2 = event.target.className;
    console.log(`the value kept for click 1 is ${value1} and click 2 is ${value2}`);

    if(value1==value2){
      value1 = '';
      value2 = '';
      document.querySelector('#one').removeAttribute('id');
    }
    else{
      //reset to no background color after 1 second
      setTimeout(function(){
        document.querySelector('#one').style.backgroundColor ='';
        event.target.style.backgroundColor = '';
        document.querySelector('#one').removeAttribute('id');
      }, 1000);
      value1 ='';
      value2 ='';      
    }

  }

}

// when the DOM loads
createDivsForColors(shuffledColors);
