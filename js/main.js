const artistClick = document.getElementById('artistclick')
const albumsClick = document.getElementById('albumsclick')
const playlistClick = document.getElementById('playlistclick')
const tracksClick = document.getElementById('tracksclick')
const albumName = document.getElementById("albumName");
const albumGenre = document.getElementById("albumGenre");
const albumArtist = document.getElementById("albumArtist");
const albumReleaseDate = document.getElementById("albumReleaseDate");
const albumSpotifyUrl = document.getElementById("albumSpotifyUrl");
const albumImageLink = document.getElementById("albumImageLink");   
const commentPlaylistId = document.getElementById('commentPlaylistId');
const submitComment = document.getElementById("submitComment");

//***********fetchest lates albums for frontpage*********//


fetch('https://folksa.ga/api/albums?limit=8&sort=desc&key=flat_eric&populateArtists=true')
    .then((response) => response.json())
    .then((albums) => {
        View.displayAlbumsFunction(albums)

    })
    .catch((error) => {
        console.log(error)
    });




const Fetch = {

    fetchAllTypes: function (type) {
        return fetch(`https://folksa.ga/api/${type}?limit=20&sort=desc&key=flat_eric&populateArtists=true`)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    
     fetchSearchedArtist: function (searchInput) {
        return fetch(`https://folksa.ga/api/artists?limit=5000&key=flat_eric&name=${searchInput}`)

            .then(function (response) {
                return response.json();
             

            })
            .catch(function (error) {
                console.log(error);
            })
    },
    delete: function (deleteType, deleteId) {
        
        fetch(`https://folksa.ga/api/${deleteType}/${deleteId}?key=flat_eric`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(function (response) {
                response.json();

            })
            .then(console.log)
            .catch(function (error) {
                console.log(error);
            })

    },
    addAlbum: function () {

        let: addNewAlbum = {
            title: albumName.value,
            artists: albumArtist.value,
            genres: albumGenre.value,
            releaseDate: albumReleaseDate.value,
            spotifyURL: albumSpotifyUrl.value,
            coverImage: albumImageLink.value,

        }



        fetch('https://folksa.ga/api/albums?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addNewAlbum),
            })
            .then((response) => response.json())
            .then((addNewAlbum) => {


            });


    },
    
    addArtist: function () {

        let: addNewArtist = {
            name: artistName.value,
            born: bornDate.value,
            gender: artistGender.value,
            genres: artistGenre.value,
            countryBorn: bornCountry.value,
            spotifyURL: artistSpotifyUrl.value,
            coverImage: artistImageLink.value,

        }


        fetch('https://folksa.ga/api/artists?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addNewArtist),
            })
            .then((response) => response.json())
            .then((addNewArtist) => {

            });



    },

    addPlaylist: function () {



        let: addNewPlaylist = {
            title: playlistTitle.value,
            tracks: playlistTracks.value,
            genres: playlistGenre.value,
            coverImage: PlaylistImageLink.value,
            createdBy: playlistCreatedBy.value,


        }


        fetch('https://folksa.ga/api/playlists?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addNewPlaylist),
            })
            .then((response) => response.json())
            .then((addNewPlaylist) => {
                

            });



    },
    


addComment: function (){
    
const commentInputId = commentPlaylistId.value;


let: comment = {
    playlist:commentPlaylistId.value,
    body: commentOnPlaylist.value,
    username: commentUser.value,
}

 fetch(`https://folksa.ga/api/playlists/${commentInputId}/comments?key=flat_eric`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    .then((response) => response.json())
    .then((playlist) => {
    console.log(playlist);
  });

    },



    fetchAllArtists: function () {

        return fetch('https://folksa.ga/api/artists?limit=1000&sort=desc&key=flat_eric')
            .then((response) => response.json())
            .then((artists) => {

                View.loopAllArtists(artists)
            });

    },
   

}



/***************************** Artists *****************************/
const View = {

    displayArtistsFunction: function (artists) {
        const displayArtistsElement = document.getElementById("display");
        const displaylatest = document.getElementById("latest");

        let latest = '';
        latest += `
        <h2> ARTISTS </h2>`
        let htmlBlock = '';
        for (i = 0; i < artists.length; i++) {

            htmlBlock += `
            <div id="artists">
             <img src="${artists[i].coverImage}"/>
            <div id="artistInformationWrapper">
            <h3> ${artists[i].name} </h3>
            <h4> ${artists[i].genres} </h4>
            <a href="${artists[i].spotifyURL}"><i class="fas fa-play"></i></a>
            </div>
            
            </div>
           `;

        }


        displayArtistsElement.innerHTML = htmlBlock;
        displaylatest.innerHTML = latest;
    },

    /***************************** Albums *****************************/
    displayAlbumsFunction: function (albums) {
        const displayAlbumsElement = document.getElementById("display");
        const displaylatest = document.getElementById("latest");

        let latest = '';
        latest += `
        <h2> LATEST ADDED ALBUMS </h2>`

        let htmlBlock = '';
        for (i = 0; i < albums.length; i++) {


            htmlBlock += `
            <div class="latestAlbum">
            <img src="${albums[i].coverImage}" /> 
            <div class="albumInfo">
            <h3> ${albums[i].title} </h3>
            <h4> 
            ${albums[i].genres}
            <br /> (${albums[i].releaseDate})
            <br />
            </h4>
            </div>
            </div>
          `;
        }
        displayAlbumsElement.innerHTML = htmlBlock;
        displaylatest.innerHTML = latest;


    },

    /***************************** Playlists *****************************/
    displayPlaylistsFunction: function (playlists) {
        const displayPlaylistsElement = document.getElementById("display");
        const displaylatest = document.getElementById("latest");

        let latest = '';
        latest += `
        <h2> PLAYLISTS </h2>`
        let htmlBlock = '';
        for (i = 0; i < playlists.length; i++) {

            let allTracks = '';

            let currentPlaylistTracks = playlists[i].tracks;
            for (let track of currentPlaylistTracks) {

                allTracks = allTracks + track.title + '<br/> ';
            }

            htmlBlock += `
             <div class="latestPlaylists">
              <img src="${playlists[i].coverImage}">
               <div id="playlistSongs">
                <h3>${playlists[i].title}</h3>
                <p><span> SONGS: </br> </span> </p> 
                <h4>${allTracks}</h4>
              </div>
              <button id="commentButton">COMMENT</button>
             </div>
           `;
        }
        displayPlaylistsElement.innerHTML = htmlBlock;
        displaylatest.innerHTML = latest;

    },

    /***************************** Tracks *****************************/
    displayTracksFunction: function (tracks) {
        const displayTracksElement = document.getElementById("display");
        let htmlBlock = '';
        for (i = 0; i < tracks.length; i++) {


            htmlBlock += `
            <div class="latestAlbum">
            <img src="${tracks[i].coverImage}" /> 
            <div class="albumInfo">
            <h3> ${tracks[i].title} </h3>
            <p><span>${tracks[i].album.artists}</span></p>
            <h4> 
            ${tracks[i].genres}
            <br /> (Album: ${tracks[i].album.title})
            <br />
            </h4>
            </div>
            </div>
          `;
        }
        displayTracksElement.innerHTML = htmlBlock;

    },


    loopAllArtists: function (artists) {
        for (i = 0; i < artists.length; i++) {

            albumArtist.innerHTML += `
<option> ${artists[i].name}</option>

`
        }

    },




}


/***************************** Buttons print lists *****************************/
const Controller = {

    showArtists: function () {
        artistClick.addEventListener('click', function () {
            Fetch.fetchAllTypes("artists")
                .then(function (artists) {
                    View.displayArtistsFunction(artists);
                })

        });
    },

    showAlbums: function () {
        albumsClick.addEventListener('click', function () {
            Fetch.fetchAllTypes("albums")
                .then(function (albums) {
                    View.displayAlbumsFunction(albums);
                })


        });
    },

    showPlaylists: function () {
        playlistClick.addEventListener('click', function () {
            Fetch.fetchAllTypes("playlists")
                .then(function (playlists) {
                    View.displayPlaylistsFunction(playlists);
                })
        });
    },

    submitAlbum: function () {
        const submitAlbum = document.getElementById('submitAlbum');

        submitAlbum.addEventListener('click', function (e) {
            Fetch.addAlbum();
            e.preventDefault();
        });
    },
    
    submitArtist: function () {
        const submitArtist = document.getElementById('submitArtist');

        submitArtist.addEventListener('click', function (e) {
            Fetch.addArtist();
            e.preventDefault();
        });
    },
    
    submitPlaylist: function () {
        const submitPlaylist = document.getElementById('submitPlaylist');

        submitPlaylist.addEventListener('click', function (e) {
            Fetch.addPlaylist();
            e.preventDefault();
        });
    },


    deleteAlbum: function () {
        const deleteButtonAlbum = document.getElementById('deleteButtonAlbum')

        deleteButtonAlbum.addEventListener('click', function (e) {
            const deleteAlbum = document.getElementById('deleteAlbum').value
            Fetch.delete('albums', deleteAlbum)

            e.preventDefault()

        });
    },
    deletePlaylist: function () {
        const deleteButtonPlaylist = document.getElementById('deleteButtonPlaylist')

        deleteButtonPlaylist.addEventListener('click', function (e) {
            const deletePlaylist = document.getElementById('deletePlaylist').value
            Fetch.delete('playlists', deletePlaylist)

            e.preventDefault()

        });

    },
    deleteArtists: function () {
        const deleteButtonArtist = document.getElementById('deleteButtonArtist')

        deleteButtonArtist.addEventListener('click', function (e) {
            const deleteArtist = document.getElementById('deleteArtist').value
            Fetch.delete('artists', deleteArtist)

            e.preventDefault()


        });
    },
    
searchArtist: function () {
       const searchInput = document.getElementById('searchInput');
       
        searchInput.addEventListener('change', function () {
            
            let searchValue = document.getElementById('searchInput').value;
            Fetch.fetchSearchedArtist(searchValue)
            .then(function (artists) {
             View.displayArtistsFunction(artists);
            document.getElementById('searchInput').value = '';
            })

        });
    }
    


}



//----- comment form popup -----//

$(document).on("click", "#commentButton", function (event) {
    var x = document.getElementById("commentForm");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";

    }
});

$( "#closeWindow" ).click(function() {
  $( "#commentForm" ).hide(1000);
});


$(document).ready(function(){
  var $searchIcon = $('.search-icon');
  var $searchInput = $('.search-input');
  
  $searchIcon.click(function(){
    $searchInput.toggleClass('open');
  });
});

// ------------------------ MENU SLIDER ------------------------  //

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


// ---- SCROLL ----- //


function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById("scrolldiv").addEventListener('click', () => {
  scrollTo(document.getElementById("addForm"));
});


document.getElementById("scrollUp").addEventListener('click', () => {
    scrollTo(document.getElementById("punchline"));
});


Fetch.fetchAllArtists();
Controller.showArtists();
Controller.showAlbums();
Controller.showPlaylists();
Controller.submitAlbum();
Controller.submitArtist();
Controller.submitPlaylist();
Controller.deletePlaylist();
Controller.deleteAlbum();
Controller.deleteArtists();
Controller.searchArtist();

