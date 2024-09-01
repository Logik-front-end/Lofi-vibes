

function filterVideos(category) {
    var allVideos = document.querySelectorAll('.video-container div');
    allVideos.forEach(function(video) {
        if (video.classList.contains(category)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

window.onYouTubeIframeAPIReady = function() {
    var firstIframe = document.querySelector('.video-container iframe');
    var player = new YT.Player(firstIframe, {
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            }
        }
    });
};


function showMore() {
    var hiddenVideos = document.querySelectorAll('.hidden');
    hiddenVideos.forEach(function(video) {
        video.classList.remove('hidden');
    });

    // Hide the button after showing all videos
    document.querySelector('.show-more-btn').style.display = 'none';
}