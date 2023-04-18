import * as Game from "./const.js";
import { getEmojis } from "./game.js";

let appTimer = null;
let showAnimation = false;

let gameLevel = Game.LVL4_4; /* Start the game at this level */

function gameOver() {
  // stop the timer
  clearInterval(appTimer);

  // show [You Won] modal dialog
  document.getElementById("popup-dlg").classList.add("showme");
}

// game initialization section
(function () {
  console.log(gameLevel + " game begins!!");

  // disable right click
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  let gameTitle = null;
  let [cols, rows, cardDivisor] = [4, 4, 5];

  switch (gameLevel) {
    case Game.LVL3_4:
      gameTitle = "3 × 4 Game";
      [cols, rows, cardDivisor] = [3, 4, 5];
      break;
    case Game.LVL4_4:
      gameTitle = "4 × 4 Game";
      [cols, rows, cardDivisor] = [4, 4, 5];
      break;
    case Game.LVL4_5:
      gameTitle = "4 × 5 Game";
      [cols, rows, cardDivisor] = [4, 5, 6.3];
      break;
    case Game.LVL5_5:
      gameTitle = "5 × 5 Game";
      [cols, rows, cardDivisor] = [5, 5, 6.3];
      break;
  }

  // change the game title and heading (h1)
  document.title = "🌍 Memory " + gameTitle;
  document.getElementById("game-level").innerHTML = "Memory " + gameTitle;

  // we already have 12 divs for game of 3x4 in HTML page
  // we dynamically generate div for game 4x4, 4x5, 5x5 and beyond
  let parentDiv = document.querySelector(".grid-container");

  for (let i = 12; i < rows * cols; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-card");
    newDiv.dataset.id = i;
    parentDiv.appendChild(newDiv);
  }

  // changing the value of CSS variables
  var r = document.querySelector(":root");
  r.style.setProperty("--card-cols", cols);
  r.style.setProperty("--card-rows", rows);
  r.style.setProperty("--card-divisior", cardDivisor);

  // show animation during card click
  if (showAnimation === true) {
    const gridItems = document.querySelectorAll(".grid-card");
    gridItems.forEach((item) => {
      item.classList.add("show-animation");
    });
  }
})();

(function () {
  /* 
  This is main code for memory game (4x4, 4x5, 5x5 and more)
  @Author: Siken Man Dongol
  @Date  : April 11-17, 2023
  */

  let [count, gameScore, gameMoves] = [0, 0, 0];

  const pairs = getEmojis(gameLevel);
  console.log(pairs);

  let [firstClick, secondClick] = [null, null];
  let [firstEmoji, secondEmoji] = [null, null];

  const gridItems = document.querySelectorAll(".grid-card");
  gridItems.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  function handleClick(e) {
    gameMoves++;
    // display games moves (2 clicks = 1 move)
    if (gameMoves % 2 == 0) {
      document.getElementById("moves").innerHTML = Number(gameMoves / 2);
    }
    //console.info(count, gameScore, gameMoves);

    if (count === 0) {
      firstEmoji = pairs[this.dataset.id];
      e.target.textContent = firstEmoji;
      //----
      firstClick = this;

      /* GAME OVER for 5x5 game, where there is one extra card */
      if (gameScore == Number(Math.floor(pairs.length / 2))) {
        firstClick.classList.add("clicked-last");
        firstClick.removeEventListener("click", handleClick);

        gameOver();
      } else {
        firstClick.classList.add("clicked");
      }
      count++;
    } else if (count === 1) {
      secondEmoji = pairs[this.dataset.id];
      e.target.textContent = secondEmoji;
      //----
      secondClick = this;
      secondClick.classList.add("clicked");

      if (firstEmoji === secondEmoji) {
        gameScore++;
        document.getElementById("match").innerHTML = gameScore;

        firstClick.classList.add("matched");
        secondClick.classList.add("matched");

        firstClick.removeEventListener("click", handleClick);
        secondClick.removeEventListener("click", handleClick);
        firstClick = null;
        secondClick = null;
        count = 0;

        /* GAME OVER for all other games */
        if (gameScore == Number(pairs.length / 2)) gameOver();
      } else {
        setTimeout(() => {
          firstClick.textContent = "";
          secondClick.textContent = "";

          firstClick.classList.remove("clicked");
          secondClick.classList.remove("clicked");
          firstClick = null;
          secondClick = null;
          count = 0;
        }, 720);
        count++;
      }
    }
  }
})();

// Timer block of the JavaScript
(function () {
  /* 
    This JS block handles displaying timer on the screen in 0:00 (m:ss) format
    this timer is called after every 1 second.
    @Author: Siken Man Dongol
    @Date  : April 12, 2023
*/
  let [seconds, minutes] = [0, 0];

  appTimer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    let mm = `${String(minutes).padStart(1, "0")}`;
    let ss = `${String(seconds).padStart(2, "0")}`;
    document.getElementById("timer").innerHTML = `${mm}:${ss}`;
  }, 1000);
})();
