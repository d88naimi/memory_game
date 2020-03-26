let gameHome =document.querySelector('.game-home')
console.log(gameHome);
// make an array of images to loop through 
//make vars for the game
// init game 

let images = ["corvette", "ferrari", "lambo", "mb"]
//shuffle array images function
//   const shuffle = images[Math.floor(Math.random() * images.length)];

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

images.forEach(i => {
var html = `
    <div class="cell small-3 box">
        <button><img src="./images/${i}.jpg" alt="car"></button></div>
    </div>
`;    
gameHome.insertAdjacentHTML("afterbegin", html);
});



//render function 
// loop through images 
// place images into container
// append images to container

// handler function
// compare firstselection value to second selection value 
// if correct leave facing up 
//else flip the cards back over timer may be needed 

// function reset game 


