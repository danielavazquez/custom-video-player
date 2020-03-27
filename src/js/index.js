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
//*Seventh write function updateProgress for timeupdate event, want a percentage of time for the progress bar
//*Eighth set the progress bar to reflect the actual time elapsed since video was played, setVideoProgress
//*Ninth set timeStamp
//* console.log(video.currentTime); and gives you seconds being played 0.117335, 0.370524, 1.113543 etc...
//* duration property gives you this format 59.818333


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
//set progress.value because it's a range input so it has a value and create video.currentTime / video.duration) * 100 to convert in a %
//currentTime property sets or returns the current position (in seconds) of the audio/video playback 1.00 2.083 3.085 ...
//duration property returns how long the actual video is i.e. 59.00686 seconds
//the progress bar moves because it is constantly getting that percentage

//Ninth step is to fix this function that changes the timeStamp to the actuall progress of the video
// Get minutes: create a variable called mins and round it down Math.floor(video.currentTime / 60) ; this gives us the minutes
//if mins less than 10, then mins = 0 concatenated to mins and formatted as a string --> '0' +String(mins)

//Get seconds: use modulus operator to get the remainder of 60
//also if it is less than 10 seconds then concatenate to secs
//take timeStamp element from DOM and set innerHTML to `${mins}:${secs}` template string
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  // 1 second / 60 = 0.016667 , &  0.016667 < 10 so 0:016667 minutes have gone by
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins); //concat
  }

  // Get seconds
  // 1 % 60 = 1/60 = 0.016667 so 0 * 60 = 0, 1-0 =  remainder 1
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs); //concat
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//so when 1.0023 seconds go by the timeStamp displays it as 0:01

//Set video time to progress
//take video.currentTime and set it equal to whatever the progress.value is + ensures it is a number
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//Stop video
//There is a property called currentTime and we set it to 0, basically resetting it to the beginning
//and then we pause it below
//When you click on the stop button, sets timeStamp to 0, pauses it, and puts video back to beginning
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);



