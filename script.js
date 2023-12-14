
let boxes = document.querySelectorAll(".boxes");  //It will be an HTML collection same as arrays
let winner = document.querySelector("h1");
let message_box = document.querySelector(".msg-container");
let newGameBtn = document.querySelector(".newGameBtn");
let resetBtn = document.querySelector(".reset-button");
let turnO = true; //PlayerO and PlayerX

// Defining the Winning patterns in a 2d Array
const winning_chances = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// reset-button
const resetButton = () => {
  turnO = true;
  enable_boxes();
};
// For disabling the boxes just after any player wins
const disable_boxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
// For enabling the boxes just after any player wins
const enable_boxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    message_box.classList.add("hide");
    message_box.classList.remove("full_display");
    box.innerText = "";
  });
};
// Showing winner function
const show_winner = () => {
  message_box.classList.remove("hide");
  message_box.classList.add("full_display");
  disable_boxes();
};


// Function for checking the winner
const check_winner = (winning_chances) => {
  for (let arr of winning_chances) { //traversing each array of the "check_winner" array
    // Positions of the boxes
    let position_1 = boxes[arr[0]].innerText;
    let position_2 = boxes[arr[1]].innerText;
    let position_3 = boxes[arr[2]].innerText;
    //  First check if any of the box content is empty or not
    if ((position_1 != "") && (position_2 != "") && (position_3 != "")) {
      if ((position_1 == position_2) && (position_2 == position_3)) {
        // For displaying the winner who wins the game either playerX or playerO
        winner.innerText = `Winner is Player${position_1}`;
        show_winner();
      }
    }
  }
};


// As boxes is a html collection same as an array and here box refers to each element of array or each white box.
let counter = 0;
// traversing each box from boxes array
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    counter++;
    box.disabled = true; //to disable the button once after clicking
    check_winner(winning_chances);
  });
});
console.log(counter);

// For trigerring new game button and reset game button
newGameBtn.addEventListener("click", resetButton);
resetBtn.addEventListener("click", resetButton);

