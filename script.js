var isAudioPlaying = false;

function moveButton() {
    var button = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');
    var sadCat = document.getElementById('sad-cat');
    var emoji = document.getElementById('emoji');

    sadCat.style.opacity = '1';
    emoji.style.opacity = '1';

    if (!isAudioPlaying) {
        var audio = new Audio('audio/sad-cat.mp3');
        isAudioPlaying = true;
        audio.play();
        

        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
        }, 5000);
    }


    var buttonRect = button.getBoundingClientRect();
    var yesButtonRect = yesButton.getBoundingClientRect();

    var maxX = yesButtonRect.left - buttonRect.width - 50;
    var maxY = window.innerHeight - buttonRect.height - 550;

    var newX = Math.floor(Math.random() * maxX) + 'px';
    var newY = Math.floor(Math.random() * maxY) + 'px';

    button.style.position = 'absolute';
    button.style.left = newX;
    button.style.top = newY;
}



function chooseOption(option) {
    document.getElementById('main-content').style.display = 'none';

    if (option === 'yes') {
        document.getElementById('yes-content').style.display = 'flex';
        document.getElementById('sad-cat').style.opacity = '0';
        document.getElementById('emoji').style.opacity = '0';
        var videoId = 'btAXT3xo9oM';
        document.getElementById('youtube-video').src = 'https://www.youtube.com/embed/' + videoId;
    } else if (option === 'no') {
        document.getElementById('no-content').style.display = 'block';
    }
}

function homePageClick(option) {
    document.getElementById('hello-page').style.display = 'none';

    if (option === 'continue') {
        document.getElementById('main-content').style.display = 'flex';
    }
}

function goBack() {
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('yes-content').style.display = 'none';
    document.getElementById('no-content').style.display = 'none';
    document.getElementById('video-container').style.display = 'none';

    var noButton = document.getElementById('no-button');
    noButton.style.position = 'relative';
    noButton.style.left = 'auto';
    noButton.style.top = 'auto';
    isAudioPlaying = false;
}

