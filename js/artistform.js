   //----ARTISTS---//

    const artistName = document.getElementById("artistName");
    const bornDate =  document.getElementById("bornDate");
    const artistGender = document.getElementById("artistGender")
    const artistGenre = document.getElementById("artistGenre");
    const bornCountry = document.getElementById("bornCountry");   
    const artistSpotifyUrl = document.getElementById("artistSpotifyUrl");
    const artistImageLink = document.getElementById("artistImageLink");
    const submitArtist = document.getElementById("submitArtist");

const ArtistModel = {

    addArtist: function (){
    
        let: addNewArtist = {
          name: artistName.value,
          born: bornDate.value,
          gender: artistGender.value,
          genres: artistGenre.value,
          countryBorn: bornCountry.value,
          spotifyURL: artistSpotifyUrl.value,
          coverImage: artistImageLink.value,

        }
    
    
        return fetch('https://folksa.ga/api/artists?key=flat_eric',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addNewArtist),
        })
            .then((response) => response.json())
            .then((addNewArtist) => {
            console.log(addNewArtist);
            return addNewArtist;

    });

   

}
}

submitArtist.addEventListener("click", function (e) {
            ArtistModel.addArtist()
            .then(console.log)
            e.preventDefault();
        });


const deleteArtist = document.getElementById('deleteArtist')
const deleteButtonArtist = document.getElementById('deleteButtonArtist')



  
function deleteArtistFunction (){
const artistInputID = deleteArtist.value
 fetch(`https://folksa.ga/api/artists/${artistInputID}?key=flat_eric`,
 {
   method: 'DELETE',
   headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
   },
 })
 .then((response) => response.json())
 .then((artist) => {
   console.log(artist);
 });
        
}


deleteButtonArtist.addEventListener('click', function (e){
                
    deleteArtistFunction()
    .then(console.log)
    e.preventDefault()
                                   }); 
