// get references to the video and button
var video = document.getElementById('wildlifeVideo');
var btn = document.getElementById('toggleBtn');

// variable to track if video is hidden
var videoHidden = false;

btn.addEventListener('click', function() {

    if (videoHidden) {
        // video is hidden, so show it and start playing
        video.style.display = 'block';
        video.play();
        btn.textContent = 'Hide Video';
        videoHidden = false;
    } else {
        // video is visible so hide it and pause
        video.style.display = 'none'
        video.pause();
        btn.textContent = 'Play Video';
        videoHidden = true;
    }

});