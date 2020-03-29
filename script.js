let gameHome = document.querySelector(".game-home");
let firstBox;
let secondBox;
let preventSelected = false;
let findImage;
let solved = 0;

let images = [
  "corvette",
  "ferrari",
  "lambo",
  "mb",
  "corvette",
  "ferrari",
  "lambo",
  "mb"
];

// init game
init();

function init() {
  render(shuffle(images));
}
//shuffle array images function

//shuffle array times 2  and the loop through
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//render function

function render(images) {
  // loop through images
  // place images into container
  images.forEach(i => {
    var html = `
    <div class="cell small-3 box">
        <button  class="butBox"><img data-car=${i} src="./images/${i}.jpg" alt="car"></button></div>
    </div>
`;
    // append images to container
    gameHome.insertAdjacentHTML("afterbegin", html);
  });
}

document.addEventListener("click", handler);

function handler(event) {
  const selected = event.target;
  if (!selected.matches("img") || preventSelected) {
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
    return;
  }
  solved += 2;
  if (solved >= images.length) {
    alert("Winner");
    reset();
    gameHome.innerHTML = "";
    solved = 0;
    init();
  } else {
    reset();
  }
}

function reset() {
  firstBox = undefined;
  secondBox = undefined;
  preventSelected = false;
  
}
// if correct leave facing up
//else flip the cards back over timer may be needed

// function reset game
