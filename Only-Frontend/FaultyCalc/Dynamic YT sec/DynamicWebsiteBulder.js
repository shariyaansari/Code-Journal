function createCard(title, ChannelName, Views, monthsOld, duration, thumbnail) {
	let ViewsNum;
	if (Views < 1000000) {
		ViewsNum = Views / 1000 + "k";
	} else if (Views > 1000000) {
		ViewsNum = Views / 1000000 + "M";
	} else if (Views < 1000) {
		ViewsNum = Views;
	}
	let html = `<div class="card">
            <div class="img">
                <img src="${thumbnail}"
                    alt="">
                <div class = "capsule">${duration}</div>
            </div>
            <div class="content">
                <h1>${title}</h1>
                <p>${ChannelName}. ${ViewsNum} views . ${monthsOld} months ago</p>
            </div>
        </div>`;
	// document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
	document.getElementById("btn").addEventListener("click", () => {
		document.querySelector(".container").innerHTML =
			document.querySelector(".container").innerHTML + html;
	});
}

createCard(
	"Introduction to Backend | Sigma Web dev #2",
	"CodeWithHarry",
	560000,
	7,
	"31:22",
	"https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg"
);
