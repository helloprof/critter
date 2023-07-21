// console.log("is it working?")

const { critters, tweets } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ critters, tweets }, "App Data");

// console.log(critters)

function generateTweetsButton() {
    var navBar = document.querySelector(".navbar")
    critters.forEach((critter) => {
        var critterButton = document.createElement("button")
        // critterButton 
        critterButton.textContent = critter.username 
        critterButton.className = "tweet-button"
        critterButton.addEventListener("click", () => displayTweets(critter.id))
        navBar.appendChild(critterButton)
    })
}

function displayTweets(critterID) {
    var mainPage = document.querySelector("#mainPage")
    tweets.forEach((tweet) => {
        if (critterID == tweet.id ) {
            var card = document.createElement("card")
            // critterButton 
            card.textContent = tweet.tweet 
            card.className = "card"
            // var cardImage = card.createElement("img")
            // cardImage.classname
            mainPage.appendChild(card)
        }
    })
}

function onLoad() {
    generateTweetsButton()
}

window.addEventListener("load", onLoad)