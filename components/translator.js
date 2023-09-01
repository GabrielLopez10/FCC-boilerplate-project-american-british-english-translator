// Importing necessary dictionaries for translation
const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    translate(text, locale, highlight) {
        let translation = text;
        // Determine the translation direction based on the 'locale' parameter
        if (locale === 'british-to-american') {
            translation = this.translateOneWay(britishOnly, translation, highlight);
            translation = this.translateTitles('british', translation, highlight);
            translation = this.translateSpelling('british', translation, highlight);
            translation = this.translateTime('british', translation, highlight);
        } else {
            translation = this.translateOneWay(americanOnly, translation, highlight);
            translation = this.translateTitles('american', translation, highlight);
            translation = this.translateSpelling('american', translation, highlight);
            translation = this.translateTime('american', translation, highlight);
        }

        if (translation === text) {
            return 'Everything looks good to me!';
        }

        return translation;
    }
    // Helper function for one-way translation using dictionaries
    translateOneWay(locale, translation, highlight) {
        for (let i in locale) {
            let replacement = locale[i];
            // Wrap the replacement with <span> if 'highlight' is true
            if (highlight === true) {
                replacement = '<span class="highlight">' + replacement + '</span>';
            }
            // Create a regular expression to find the word and perform the replacement
            let regex = new RegExp(`(?<=[^a-zA-Z-]|^)${i}(?=[^a-zA-Z])`, 'ig');
            translation = translation.replace(regex, replacement);
        }

        return translation;
    }
    // Helper function for translating titles/honorifics
    translateTitles(from, translation, highlight) {
        for (let i in americanToBritishTitles) {
            let replacement, word;

            if (from === 'american') {
                word = i;
                replacement = americanToBritishTitles[i];
            } else {
                word = americanToBritishTitles[i];
                replacement = i;
            }
            // Capitalize the replacement and wrap with <span> if 'highlight' is true
            if (highlight === true) {
                replacement =
                    '<span class="highlight">' +
                    replacement.charAt(0).toUpperCase() +
                    replacement.slice(1) +
                    '</span>';
            } else {
                replacement =
                    replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }
            // Create a regular expression to find the word and perform the replacement
            let regex = new RegExp(`(?<=[^a-zA-Z]|^)${word}(?=[^a-zA-Z])`, 'ig');
            translation = translation.replace(regex, replacement);
        }

        return translation;
    }
    // Helper function for translating spelling differences
    translateSpelling(from, translation, highlight) {
        for (let i in americanToBritishSpelling) {
            let replacement, word;

            if (from === 'american') {
                word = i;
                replacement = americanToBritishSpelling[i];
            } else {
                word = americanToBritishSpelling[i];
                replacement = i;
            }
            // Wrap the replacement with <span> if 'highlight' is true
            if (highlight === true) {
                replacement = '<span class="highlight">' + replacement + '</span>';
            }
            // Create a regular expression to find the word and perform the replacement
            let regex = new RegExp(`(?<=[^a-zA-Z]|^)${word}(?=[^a-zA-Z])`, 'ig');
            translation = translation.replace(regex, replacement);
        }

        return translation;
    }
    // Helper function for translating time format differences
    translateTime(from, translation, highlight) {
        let char;
        let replacement;
        // Determine the characters for time format based on the 'from' parameter
        if (from === 'british') {
            char = '.';
            replacement = ':';
        } else {
            char = ':';
            replacement = '.';
        }

        let regex = new RegExp(`\\d\\d?[${char}]\\d{2}`, 'gi');
        let matches = translation.match(regex);

        for (let i in matches) {
            let tempRegex = new RegExp(`(?<=\\d\\d?)[${char}](?=\\d{2})`, 'gi');
            let temp = matches[i].replace(tempRegex, replacement);

            if (highlight === true) {
                temp = '<span class="highlight">' + temp + '</span>';
            }

            translation = translation.replace(matches[i], temp);
        }

        return translation;
    }
}

module.exports = Translator;
