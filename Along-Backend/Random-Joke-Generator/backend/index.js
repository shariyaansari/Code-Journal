const express = require("express");
const cors = require("cors");
// const jokes = require("./jokes");

const app = express();
const port = 5000;

app.use(cors());
// app.get("/", (req, res) => {
// 	console.log('Server ran successfully');
// 	res.send("hey there")
// });

// Route to get a random joke
app.get("/", async (req, res) => {
	// When the joke is coming from jokes.js
	// const randomIndex = Math.floor(Math.random() * jokes.length);
	// res.json({ joke: jokes[randomIndex] });

	// Fetching jokes from public api
	try {
		const response = await fetch(
			"https://official-joke-api.appspot.com/random_joke"
		);
		const jokeData = await response.json();
		const joke = `${jokeData.setup} ${jokeData.punchline}`;
		res.json({joke})
	} catch (error) {
		res.status(500).json({ error: "Failes to fetch" });
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
