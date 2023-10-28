import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_FRAME = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const currentTime = data.seconds;
  localStorage.setItem(KEY_FRAME, currentTime);
}

player.setCurrentTime(localStorage.getItem(KEY_FRAME)).then(onPlay);
