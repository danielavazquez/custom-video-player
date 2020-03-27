const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//*First pull in all the DOM elements then we need each of these inputs
//*Second add event listeners that call specific functions
//*Third set up functions
//*Fourth Write toggleVideoStatus function
//*Fifth write updatePlayIcon function
//*Sixth write stopVideo function
//*
//*
//*
//*


//Play & Pause video
//There is a property called paused and if the video is, we call a method called play
//if it's not paused and we click then call the method pause video.pause();
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Update Play/Pause icon
//When video is paused, want to display the pause icon, take play button and set the innerHtml to the pause button
//If video is set at pause then set the button at pause
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

//Update Progress & Timestamp
function updateProgress() {
  return true;
}

//Set video time to progress
function setVideoProgress() {
  return true;
}

//Stop video
function stopVideo() {
  return true;
}

//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);



