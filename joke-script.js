// joke-script.js

// Function to fetch a random joke from Jokes.one API
async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    return data;
}

// Function to display the joke and set up copy to clipboard functionality
async function displayJoke() {
    const joke = await fetchJoke();
    const jokeContainer = document.getElementById('jokeContainer');
    const copyButton = document.getElementById('copyButton');

    if (joke.type === 'single') {
        jokeContainer.textContent = joke.joke;
    } else {
        jokeContainer.textContent = `${joke.setup} - ${joke.delivery}`;
    }

    // Set up copy to clipboard
    copyButton.onclick = () => {
        navigator.clipboard.writeText(jokeContainer.textContent)
            .then(() => alert('Joke copied to clipboard!'))
            .catch(err => console.error('Failed to copy: ', err));
    };
}

// Call displayJoke on page load
window.onload = displayJoke;