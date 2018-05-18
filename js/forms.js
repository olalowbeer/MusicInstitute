//------ ALBUM ----//
    const albumName = document.getElementById("albumName");
    const albumGenre = document.getElementById("albumGenre");
    const albumArtist = document.getElementById("albumArtist");
    const albumReleaseDate = document.getElementById("albumReleaseDate");
    const albumSpotifyUrl = document.getElementById("albumSpotifyUrl");
    const albumImageLink = document.getElementById("albumImageLink");
    const submitAlbum = document.getElementById("submitAlbum");



  function fetchAllArtists() {

    fetch('https://folksa.ga/api/artists?limit=1000&sort=desc&key=flat_eric')
        .then((response) => response.json())
        .then((artists) => {

            loopAllArtists(artists)
        });

}


fetchAllArtists();
function loopAllArtists (artists){
    for (i = 0; i < artists.length; i++){

        albumArtist.innerHTML +=`
<option> ${artists[i].name}</option>

`
    }
    
}

 const AlbumModel = {

       

submitAlbum.addEventListener('click', function(e){
            AlbumModel.addAlbum()
                .then(console.log)
            e.preventDefault();
    });

  
