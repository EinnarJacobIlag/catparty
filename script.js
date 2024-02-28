let lastInteractionTime = Date.now();
let timerInterval;

function updateTimer() {
  let currentTime = Date.now();
  let elapsedTime = currentTime - lastInteractionTime;
  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;
  document.getElementById("timer").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

startTimer(); // Initial call to start the timer

document.addEventListener("DOMContentLoaded", function() {
  const imageList = [
    "image/pete-cat.gif",
    "image/groovy-cat.gif",
    "image/dj-cat.gif",
    "image/real-cat.gif",
    "image/twerk-cat.gif",
    "image/bop-cat.gif",
    "image/worm-cat.gif",
    "image/whimsical-cat.gif",
    "image/tom-cat.gif",
    "image/sturdy-cat.gif",
    "image/evil-cat.gif",
    "image/mario-cat.gif",
    "image/swim-cat.gif",
    "image/macarena-cat.gif",
    "image/dog-cat.gif",
    "image/ginger-cat.gif",
    "image/happy-cat.gif",
    "image/dino-cat.gif",
    "image/alien-cat.gif"
  ]; // List of image URLs

  function setupImageChange(imageId, initialIndex) {
    const image = document.getElementById(imageId);
    let currentIndex = initialIndex;

    image.addEventListener("click", function() {
      // Increment the index to get the next image in the list
      currentIndex = (currentIndex + 1) % imageList.length;
      
      // Set the src of the clicked image to the next image
      image.src = imageList[currentIndex];
    });
  }

  setupImageChange("one", 0);
  setupImageChange("two", 1);
  setupImageChange("three", 2);
  setupImageChange("four", 3);
  setupImageChange("five", 4);
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
    var timestamps = [0, 182, 360, 559, 726, 1007, 1136, 1251]; // Array of timestamps in seconds
    var randomIndex = Math.floor(Math.random() * timestamps.length); // Generate a random index
    var randomTime = timestamps[randomIndex]; // Select a random timestamp from the array
    audio.currentTime = randomTime; // Set the currentTime to the random timestamp
});


document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    gunShot();
    stopTimer();
    changeImages();
    changeText();
  } else {
    stopTimer(); // Stop the timer when the page becomes visible again
  }
});

function changeImages() {
  document.getElementById("one").style.opacity = 0; // Change "bop" image source
    document.getElementById("two").style.opacity = 0;; // Change "groove" image source
    document.getElementById("three").style.opacity = 0; // Change "dj" image source
    document.getElementById("four").style.opacity = 0; // Change "real" image source
    document.getElementById("five").style.opacity = 0; // Change "twerk" image source
}

let soundPlayed = false;

function gunShot() {
  if (!soundPlayed) {
    const bgMusic = document.getElementById("background-music");
    const gun = document.getElementById("gun");
    bgMusic.pause();
    gun.play();
    soundPlayed = true;
  }
}

function changeText() {
    document.querySelector("h1").innerText = "You're back?";
  document.querySelector("h2").innerText = "No one is here...";
  document.querySelector("p").innerText = "@einnargali";
}