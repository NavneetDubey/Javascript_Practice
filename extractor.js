// Define the URL of the IMDb trivia page
const imdbURL = 'https://www.imdb.com/title/tt0944947/trivia/?ref_=tt_trv_trv';

// Make an HTTP GET request to the IMDb page
fetch(imdbURL)
    .then(response => response.text())
    .then(html => {
        // Parse the HTML using DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract trivia text from the elements you want (e.g., divs with class 'sodatext')
        const triviaElements = doc.querySelectorAll('.sodatext'); // Adjust the selector as needed

        // Extracted trivia text will be stored in this array
        const triviaText = [];

        triviaElements.forEach(element => {
            triviaText.push(element.textContent.trim());
        });

        // Output the extracted trivia text
        console.log(triviaText);
    })
    .catch(error => {
        console.error('Error fetching or parsing the IMDb page:', error);
    });