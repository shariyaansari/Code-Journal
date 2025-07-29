
const apiKey = "API_KEY";

function searchMovie(){
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if(query == ""){
        alert("Please Enter a movie");
        return;
    }
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(query)}`

    fetch(url)
        .then((response) => {
            if(!response.ok) throw new Error("Network Response was not OK");
            return response.json();
        })
        .then((data) => {
            if(data.Response == false){

                document.getElementById("movieResult").innerHTML = `<p style = "color: red;">${data.Error}</p>`;
                return;    
            }
            console.log(data);
            document.getElementById("movieResult").innerHTML = `
            <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/150"}" alt="Poster">
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Genre: </strong>${data.Genre}</p>
            <p><strong>Plot: </strong>${data.Plot}</p>
            <p><strong>IMDB rating: </strong>${data.imdbRating}</p>`;

        }).catch((error) => {
            console.error("Error Fetching data:", error);
            document.getElementById("movieResult").innerHTML = `<p style = "color: red;">Something went Wrong</p>`;
        })
}