const videoEl = document.createElement("video");
videoEl.setAttribute("src", "media/MotionElements-kyoto.mp4");

const containerEl = document.querySelector(".containerVideo");
containerEl.appendChild(videoEl);

// const volumeEl = document.createElement("volume");
// volumeEl.appendChild(videoEl);

const playEl = document.createElement("div");
const pauseEl = document.createElement("div");
const iconvolumeEl = document.createElement("div");
iconvolumeEl.classList.add("iconvol");
playEl.classList.add("play");
pauseEl.classList.add("pause");
playEl.addEventListener("click", function (e) {
  videoEl.play();
  console.log(videoEl.duration, videoEl.currentTime);
});
pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
  console.log(videoEl.duration, videoEl.currentTime);
});

const rangeEl = document.createElement("input");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("class", "videorange");

rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("value", "0");
rangeEl.addEventListener("change", function (e) {
  console.log(e.target.value);
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});
videoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((videoEl.currentTime / videoEl.duration) * 100)
  );
});

const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("class", "volume");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

videoEl.addEventListener("loadeddata", (e) => {
  volumeEl.setAttribute("value", videoEl.volume * 100);
});
volumeEl.addEventListener("change", function (e) {
  videoEl.volume = e.target.value / 100;
  console.log(videoEl.volume);
});

containerEl.appendChild(rangeEl);
containerEl.appendChild(volumeEl);

containerEl.appendChild(playEl);
containerEl.appendChild(pauseEl);
containerEl.appendChild(iconvolumeEl);

// const video = document.querySelector("#video")
// // set the pause button to display:none by default
// document.querySelector(".fa-pause").style.display = "none"
// // update the progress bar
// video.addEventListener("timeupdate", () => {
//     let curr = (video.currentTime / video.duration) * 100
//     if(video.ended){
//         document.querySelector(".fa-play").style.display = "block"
//         document.querySelector(".fa-pause").style.display = "none"
//     }
//     document.querySelector('.inner').style.width = `${curr}%`
// })
// // pause or play the video
// const play = (e) => {
//     // Condition when to play a video
//     if(video.paused){
//         document.querySelector(".fa-play").style.display = "none"
//         document.querySelector(".fa-pause").style.display = "block"
//         video.play()
//     }
//     else{
//         document.querySelector(".fa-play").style.display = "block"
//         document.querySelector(".fa-pause").style.display = "none"
//         video.pause()
//     }
// }
// // trigger fullscreen
// const fullScreen = (e) => {
//     e.preventDefault()
//     video.requestFullscreen()
// }
// // download the video
// const download = (e) => {
//     e.preventDefault()
//     let a = document.createElement('a')
//     a.href = video.src 
//     a.target = "_blank"
//     a.download = ""
//     document.body.appendChild(a)
//     a.click()
//     document.body.removeChild(a)
// }
// // rewind the current time
// const rewind = (e) => {
//     video.currentTime = video.currentTime - ((video.duration/100) * 5)
// }
// // forward the current time
// const forward = (e) => {
//     video.currentTime = video.currentTime + ((video.duration/100) * 5)
// }