document.getElementById("getJokeBtn").addEventListener("click",async () => {
    const response = await fetch("http://localhost:5000")
    const data = await response.json();
    document.getElementById("joke").textContent = data.joke;
})