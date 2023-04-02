import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const CURRENT_TIME ='videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay,1000));
function onPlay (event){
    localStorage.setItem(CURRENT_TIME, event.seconds);
}

setCurrentTime();
function setCurrentTime(){
    if (!localStorage.getItem(CURRENT_TIME)){
        return;
    }
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}
// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);