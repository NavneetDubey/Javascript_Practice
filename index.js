const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeData(url) {
    try {
        // Fetching HTML content from the URL
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Selecting the HTML elements containing the text you want to extract
        const textElements = $('p');
        console.log("\n")
        let a = ''
        // Extracting and logging the text from each selected element
        textElements.each((i, el) => {
            const text = $(el).text();
            console.log("\n")
            a = a + text + "\n"
        })
        const cleanedText = a.replace(/\t/g, '').replace(/\s\s+/g, ' ');
        fs.appendFile("result.txt", cleanedText, (err) => {
            if (err) {
                console.error(`Error writing to file: ${err.message}`);
                return;
            }
        });
    }

    catch (error) {
        console.error(`Bhag bhosadike ${error.message}`);
    }
}

// Replace 'YOUR_URL_HERE' with the target URL
scrapeData('https://fandomwire.com/valorants-new-weapon-in-four-years-riot-games/');