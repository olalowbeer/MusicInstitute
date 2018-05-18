   //----PLAYLIST -----//
    
        
const playlistTitle = document.getElementById("playlistTitle");
const playlistTracks = document.getElementById("playlistTracks");
const playlistGenre = document.getElementById("playlistGenre")
const PlaylistImageLink = document.getElementById("playlistImageLink");
const playlistCreatedBy = document.getElementById("playlistCreatedBy");
const submitPlaylist = document.getElementById("submitPlaylist");
const commentOnPlaylist = document.getElementById("commentOnPlaylist");
const commentUser = document.getElementById("commentUser");
const playlistId = document.getElementById("playlistId");


const AddPlaylistModel = {

    addPlaylist: function () {



        let: addNewPlaylist = {
            title: playlistTitle.value,
            tracks: playlistTracks.value,
            genres: playlistGenre.value,
            coverImage: PlaylistImageLink.value,
            createdBy: playlistCreatedBy.value,


        }


        return fetch('https://folksa.ga/api/playlists?key=flat_eric', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addNewPlaylist),
            })
            .then((response) => response.json())
            .then((addNewPlaylist) => {
                console.log(addNewPlaylist);
                return addNewPlaylist;

            });



    }
}

submitPlaylist.addEventListener("click", function (e) {
    AddPlaylistModel.addPlaylist()
        .then(console.log)
    e.preventDefault();
});



const deletePlaylist = document.getElementById('deletePlaylist')
const deleteButtonPlaylist = document.getElementById('deleteButtonPlaylist')




function deletePlaylistFunction() {
    const playlistInputID = deletePlaylist.value
    fetch(`https://folksa.ga/api/playlists/${playlistInputID}?key=flat_eric`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((playlist) => {
            console.log(playlist);
        });

}


deleteButtonPlaylist.addEventListener('click', function (e) {

    deletePlaylistFunction()
        .then(console.log)
    e.preventDefault()
});


const commentPlaylistId = document.getElementById('commentPlaylistId');
const submitComment = document.getElementById("submitComment");

function addComment(){
    
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

    }



submitComment.addEventListener('click', function (e) {  
    addComment()
        .then(console.log)
    e.preventDefault();
});
