var video = document.querySelector('.video');
var btn = document.getElementById('play-pause');

function playPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
        console.log('Pause');
    } else {
        btn.className = 'play';
        video.pause();
        console.log('Play');
    };
};

btn.onclick = function() {
    playPause();
};