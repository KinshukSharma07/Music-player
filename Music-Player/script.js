const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');

const title = document.getElementById('title');
const cover = document.getElementById('cover');


const songs = ['weekend','101','maina','impala','no idea','11k'];


let songIndex = 1;


loadSong(songs[songIndex]);


function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpeg`;
}


function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}


function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}


function prevSong() {
  songIndex--;

  if (songIndex < 0) 
  {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}


function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) 
  {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

playBtn.addEventListener('click', () => 
{
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


