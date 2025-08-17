// Cors - Cross origin Resource Sharing
// CORS is like giving your backend a "It’s okay, I trust this website" note for the browser.
// body-parser - When a client sends data in a POST request (e.g., form submission or JSON), the raw request body comes in as a stream of bytes.
// Node.js doesn’t automatically turn that into a nice req.body object for you.
// Reads the incoming request body.
// Parses it (e.g., JSON, form data).
// Attaches it to req.body so you can easily use it.
const express = require("express");
const cors = require("cors");


const fs = require("fs");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.post("/", (req, res) => {
	const { name, email, message } = req.body;
	
	if (!name || !email || !message) {
		return res.status(400).json({ error: "All fields are required" });
	}
	console.log("New Contact form submission: ");
	console.log(`Name:${name}`);
	console.log(`Email:${email}`);
	console.log(`Message:${message}`);
	console.log("-------------------------");
	
	const entry = `Name : ${name}\nEmail:${email}\nMessage:${message}\n---\n`;
	fs.appendFileSync("Submissions.txt", entry);
	res.json({ success: true, message: "Form submitted successfully" });
	
});
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
