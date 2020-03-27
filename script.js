let gameHome = document.querySelector(".game-home");
let firstBox;
let secondBox;
let preventSelected = false;
let findImage;

let images = ["corvette", "ferrari", "lambo", "mb"];

// init game
init();

function init() {
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
// console.log(randomItemFromArray(images));
//render function

function render() {
  // loop through images
  // place images into container
  images.forEach(i => {
    var html = `
    <div class="cell small-3 box">
        <button  class="butBox"><img data-car=${i} src="./images/${i}.jpg" alt="car"></button></div>
    </div>
    <div class="cell small-3 box">
        <button class="butBox"><img  data-car=${i} src="./images/${i}.jpg" alt="car"></button></div>
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
function handler() {
  $(document).on("click", function(event) {
    const selected = event.target.closest("img");
    console.log( selected);
    if (selected === undefined || preventSelected) {
      return;
    }
    if (firstBox === undefined) {
      firstBox = selected;
      showBox(selected);
      return;
    }

    if (secondBox === undefined) {
      preventSelected = true;
      secondBox = selected;
      showBox(selected);
      checker();
    }
  });
}

function showBox(box){
  box.classList.add("show");
}
function hideBox(box){
  box.classList.remove("show");
}

function checker() {
  if (
    firstBox.getAttribute("data-car") === secondBox.getAttribute("data-car")
  ) {
    console.log("correct");
  } else {
    setTimeout(() => {
      reset();
    }, 2000);
  }
}

function reset() {
  hideBox(firstBox);
  hideBox(secondBox);
  firstSelection = undefined;
  secondSelection = undefined;
  preventSelection = false;
}
// if correct leave facing up
//else flip the cards back over timer may be needed

// function reset game
