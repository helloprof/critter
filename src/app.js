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
            var card = document.createElement("div")

            var cardHeader = document.createElement("div")
            var image = document.createElement("img")

            var name = document.createElement("h5")
            var username = document.createElement("h6")
            var tweetContent = document.createElement("p")
            // critterButton 
            // card.textContent = tweet.tweet 
            name.textContent = tweet.name
            username.textContent = tweet.username
            tweetContent.textContent = tweet.tweet
            image.src = tweet.imageURL

            card.className = "card"
            cardHeader.className = "tweet"
            image.className = "image"
            
            cardHeader.appendChild(name)
            cardHeader.appendChild(username)
            cardHeader.appendChild(tweetContent)

            card.appendChild(cardHeader)
            card.appendChild(image)


            // var cardImage = card.createElement("img")
            // cardImage.classname
            mainPage.appendChild(card)
        }
    })
}



// function displayAllTweets() {
//     tweets.forEach((tweet) => {
//         displayTweets(tweet.id)
//     })
// }

function displayAllTweets(tweets) {
    var mainPage = document.querySelector("#mainPage")
    tweets.forEach((tweet) => {
            var card = document.createElement("div")

            var cardHeader = document.createElement("div")
            var image = document.createElement("img")

            var name = document.createElement("h5")
            var username = document.createElement("h6")
            var tweetContent = document.createElement("p")
            // critterButton 
            // card.textContent = tweet.tweet 
            name.textContent = tweet.name
            username.textContent = tweet.username
            tweetContent.textContent = tweet.tweet
            image.src = tweet.imageURL

            card.className = "card"
            cardHeader.className = "tweet"
            image.className = "image"
            
            cardHeader.appendChild(name)
            cardHeader.appendChild(username)
            cardHeader.appendChild(tweetContent)

            card.appendChild(cardHeader)
            card.appendChild(image)


            // var cardImage = card.createElement("img")
            // cardImage.classname
            mainPage.appendChild(card)
    })
}



function resetTweetCards() {
    var mainPage = document.querySelector("#mainPage") 
    mainPage.innerHTML = ""
}

function addReview() {
    var form = document.querySelector("#post") 
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        var date = new Date().toLocaleDateString

        var name = document.querySelector("#name").value
        var username = document.querySelector("#username").value
        // console.log(username)
        var imageURL = document.querySelector("#image").value
        var tweet = document.querySelector("#postContent").value

        var newTweet = {
            name, 
            username,
            imageURL, 
            tweet
        }
        
        tweets.push(newTweet)
        
        console.log(tweets)
        resetTweetCards()
        form.reset()
        displayAllTweets(tweets)

    })
}

function onLoad() {
    console.log("loaded")
    generateTweetsButton()
    displayAllTweets(tweets)
    addReview()
}

window.addEventListener("load", onLoad)