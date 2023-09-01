const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    const translator = new Translator();

    // Translate from American to British English
    test('Translate "Mangoes are my favorite fruit." to British English', () => {
        const text = 'Mangoes are my favorite fruit.'; // Input text in American English
        const locale = 'american-to-british'; // Translation direction
        const highlight = true; // Indicates whether to highlight translations
        const expected = 'Mangoes are my favourite fruit.'; // Expected translation in British English

        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "I ate yogurt for breakfast." to British English', () => {
        const text = 'I ate yogurt for breakfast.';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'I ate yoghurt for breakfast.';

        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "We had a party at my friend\'s condo." to British English', () => {
        const text = 'We had a party at my friend\'s condo.';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'We had a party at my friend\'s flat.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
        const text = 'Can you toss this in the trashcan for me?';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'Can you toss this in the bin for me?';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "The parking lot was full." to British English', () => {
        const text = 'The parking lot was full';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'The car park was full';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Like a high tech Rube Goldberg machine." to British English', () => {
        const text = 'Like a high tech Rube Goldberg machine.';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'Like a high tech Heath Robinson device.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "To play hooky means to skip class or work." to British English', () => {
        const text = 'To play hooky means to skip class or work.';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'To bunk off means to skip class or work.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
        const text = 'No Mr. Bond, I expect you to die.';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'No Mr Bond, I expect you to die.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Dr. Grosh will see you now." to British English', () => {
        const text = 'Dr. Grosh will see you now.';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'Dr Grosh will see you now.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Lunch is at 12:15 today." to British English', () => {
        const text = 'Lunch is at 12:15 today.';
        const locale = 'american-to-british';
        const highlight = true;
        const expected = 'Lunch is at 12.15 today.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "We watched the footie match for a while." to American English', () => {
        const text = 'We watched the footie match for a while.';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = 'We watched the soccer match for a while.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
        const text = 'Paracetamol takes up to an hour to work.';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = 'Tylenol takes up to an hour to work.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "First, caramelise the onions." to American English', () => {
        const text = 'First, caramelise the onions.';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = 'First, caramelize the onions.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "I spent the bank holiday at the funfair." to American English', () => {
        const text = ' spent the bank holiday at the funfair.';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = ' spent the public holiday at the carnival.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "I had a bicky then went to the chippy." to American English', () => {
        const text = 'I had a bicky then went to the chippy.';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = 'I had a cookie then went to the fish-and-chip shop.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', () => {
        const text = "I've just got bits and bobs in my bum bag.";
        const locale = 'british-to-american';
        const highlight = true;
        const expected = "I've just got odds and ends in my fanny pack.";
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
        const text = 'The car boot sale at Boxted Airfield was called off.';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = 'The swap meet at Boxted Airfield was called off.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Have you met Mrs Kalyani?" to American English', () => {
        const text = 'Have you met Mrs Kalyani?';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = 'Have you met Mrs. Kalyani?';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Prof Joyner of King\'s College, London." to American English', () => {
        const text = "Prof Joyner of King\'s College, London.";
        const locale = 'british-to-american';
        const highlight = true;
        const expected = "Prof. Joyner of King's College, London.";
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    test('Translate "Tea time is usually around 4 or 4.30." to American English', () => {
        const text = 'Tea time is usually around 4 or 4.30.';
        const locale = 'british-to-american';
        const highlight = true;
        const expected = 'Tea time is usually around 4 or 4:30.';
        // Get the translation result and remove HTML tags
        const translationResult = translator.translate(text, locale, highlight).replace(/<\/?span[^>]*>/g, '');

        assert.equal(translationResult, expected); // Assert the cleaned translation result
    });

    // Highlight translation
    test('Highlight translation in "Mangoes are my favorite fruit."', () => {
        const text = 'Mangoes are my favorite fruit.';
        const locale = 'american-to-british';
        const highlight = true;
        const translation = translator.translate(text, locale, highlight);
        assert.include(translation, '<span class="highlight">');
    });

    test('Highlight translation in "I ate yogurt for breakfast."', () => {
        const text = 'I ate yogurt for breakfast.';
        const locale = 'american-to-british';
        const highlight = true;
        const translation = translator.translate(text, locale, highlight);
        assert.include(translation, '<span class="highlight">');
    });

    test('Highlight translation in "We watched the footie match for a while."', () => {
        const text = 'We watched the footie match for a while.';
        const locale = 'british-to-american';
        const highlight = true;
        const translation = translator.translate(text, locale, highlight);
        assert.include(translation, '<span class="highlight">');
    });

    test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
        const text = 'Paracetamol takes up to an hour to work.';
        const locale = 'british-to-american';
        const highlight = true;
        const translation = translator.translate(text, locale, highlight);
        assert.include(translation, '<span class="highlight">');
    });
});
