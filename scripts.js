javascript
function loadTweets() {
  const tweets = localStorage.getItem('tweets');
  return tweets ? JSON.parse(tweets) : [];
}

function saveTweets(tweets) {
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function postTweet() {
  const username = document.getElementById('username').value;
  const content = document.getElementById('content').value;
  const tweets = loadTweets();
  const tweet = { username, content };
  tweets.push(tweet);
  saveTweets(tweets);
  displayTweets();
}

function displayTweets() {
  const tweets = loadTweets();
  const tweetsList = document.getElementById('tweets-list');
  tweetsList.innerHTML = '';
  for (const tweet of tweets) {
    const listItem = document.createElement('li');
    listItem.textContent = `${tweet.username}: ${tweet.content}`;
    tweetsList.appendChild(listItem);
  }
}

function searchTweets() {
  const searchUsername = document.getElementById('search-username').value;
  const tweets = loadTweets();
  const userTweets = tweets.filter(tweet => tweet.username === searchUsername);
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';
  for (const tweet of userTweets) {
    const listItem = document.createElement('li');
    listItem.textContent = `${tweet.username}: ${tweet.content}`;
    searchResults.appendChild(listItem);
  }
}

displayTweets();
