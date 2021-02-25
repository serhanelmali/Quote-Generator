const tweetButton = document.getElementById('tweet');

const kanyeQuotes = () => {
    avatarDiv.classList.add('loading');
    genButton.disabled = true;
    fetch("https://api.kanye.rest")
        .then((response) => response.json())
        .then(
            (data) => {
                document.getElementById('quote').innerHTML = data.quote;
                const text = data.quote;
                setTimeout(function () {
                    avatarDiv.classList.remove('loading')
                    genButton.disabled = false;
            }, 1000);
                const tweetLine = `https://twitter.com/intent/tweet?text=${text}%0a%0aThis poor quote generated from: ${window.location.hostname}`
                document.querySelector('.buttons>a').href = tweetLine;
            })
        }
document.getElementById("app").innerHTML = `
<div class="container">
    <img id="avatar" class="" alt="Kanye West's Phototo" src="./kanye.jpg"></img>
    <div class="quote-container">
        <h2>-KANYE-</h2>
        <p id="quote">Press button to make me talk!</p>
        <div class="buttons">
            <a><button id="twitter"><i class="fab fa-twitter fa-2x"></i></button></a>
            <button id="generator" onClick="kanyeQuotes()"><i class="fas fa-question fa-2x"></i></button>
        </div>
    </div>
</div>
`
const avatarDiv = document.getElementById('avatar');
const genButton = document.getElementById('generator');