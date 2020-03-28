let gameHome = document.querySelector(".game-home");

let firstBox;
let secondBox;
let preventSelected = false;
let findImage;
let solved = 0;

let images = ["corvette", "ferrari", "lambo", "mb"];

// init game
init();

function init() {
  render();
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

document.addEventListener("click", handler);

function handler(event) {
  const selected = event.target;
  console.log(selected);
  if (selected === undefined || preventSelected) {
    return;
  }
  if (firstBox === undefined) {
    firstBox = selected;
    showBox(firstBox);
    return;
  }

  if (secondBox === undefined) {
    preventSelected = true;
    secondBox = selected;
    showBox(secondBox);
    checker();
  }
}

// handler function
// check if anything is selected else assign clicked img to firstSelection
// if preventSelected is true
// assign next img selected to secondSelection
// if firstSelection is and secondSelection is true
// check if firstSelection === secondSelection
// leave show class on
// else remove show class

function showBox(box) {
  box.classList.add("show");
}
function hideBox(box) {
  box.classList.remove("show");
}

function checker() {
  if (
    firstBox.getAttribute("data-car") !== secondBox.getAttribute("data-car")
  ) {
    setTimeout(() => {
      hideBox(firstBox);
      hideBox(secondBox);
      reset();
    }, 2000);
    return
  } 
  console.log(images.length);
  solved += 2;
  if(solved >= images.length * 2){
    alert("Winner");
    init();
  } else {
    reset();
  }
}

function reset() {
  firstBox = undefined;
  secondBox = undefined;
  preventSelection = false;
}
// if correct leave facing up
//else flip the cards back over timer may be needed

// function reset game
