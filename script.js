let gameHome =document.querySelector('.game-home');
let firstBox;
let secondBox;
let preventSelected = false

let images = ["corvette", "ferrari", "lambo", "mb"];

// init game 
init();

function init(){
    render();
    handler();
}
//shuffle array images function

//   console.log(shuffle);
  function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item === not) {
      console.log("Ahh we used that one last time, look again");
      return randomItemFromArray(arr, not);
    }
    return item;
  }
console.log(randomItemFromArray(images));
//render function 

function render(){
// loop through images 
// place images into container
images.forEach(i => {
var html = `
    <div class="cell small-3 box">
        <button data-car=${i} class="butBox"><img src="./images/${i}.jpg" alt="car"></button></div>
    </div>
    <div class="cell small-3 box">
        <button data-car=${i} class="butBox"><img src="./images/${i}.jpg" alt="car"></button></div>
    </div>
    
`;    
// append images to container
gameHome.insertAdjacentHTML("afterbegin", html);
});
}


// handler function
// check if anything is selected else assign clicked img to firstSelection
// if preventSelected is true 
// assign next img selected to secondSelection
// if firstSelection is and secondSelection is true
// check if firstSelection === secondSelection 
// leave show class on 
// else remove show class 
function handler(){
  $(document).on("click", function(event) {
    const checkIfSelected = event.target.closest(".butBox");
    preventSelected = true;
    if (preventSelected) {
      firstBox = checkIfSelected.getAttribute("data-car");
      console.log(firstBox);
    } else {
      console.log('no');
    }
    

    // $("img").toggleClass("show");

  });
} 
// if correct leave facing up 
//else flip the cards back over timer may be needed 

// function reset game 


