//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
document.querySelector("button").addEventListener("click", getImage);

function getImage() {
    let date = document.querySelector("input").value;
    console.log(date);
    fetch(url + "&date=" + date)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data);
            document.querySelector(
                "h2"
            ).innerText = `${data.date} ${data.title} - ${data.copyright}`;
            if (data.media_type === "video"){
                document.querySelector("img").src = '#';
                document.querySelector("iframe").src = data.url;
            } else {
                document.querySelector("iframe").src = '#';
                document.querySelector("img").src = data.hdurl;
            }
            document.querySelector("h3").innerText = data.explanation;
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });
}
