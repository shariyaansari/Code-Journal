document.getElementById("contactForm").addEventListener("submit", async (e) => {
	e.preventDefault();
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const messsage = document.getElementById("message").value.trim();
	try {
		const response = await fetch("http://localhost:5000", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, message }),
		});
		const data = await response.json();
		if (data.success) {
			document.getElementById("status").textContent = "✅ Message sent!";
			document.getElementById("contactForm").reset();
		} else {
			document.getElementById("status").textContent = "❌ " + data.error;
		}
	} catch (error) {
		document.getElementById("status").textContent = "⚠️ Failed to send message";
	}
});
