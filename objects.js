var playlist = {vampireweekend: "horchata", haim: "days are gone", lizzo: "juice"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
}

function removeFromPlayist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}