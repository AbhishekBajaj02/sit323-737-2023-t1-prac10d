const chai = require('chai');
const expect = chai.expect;

// Function to generate a random quote
function generateRandomQuote() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

describe('Random Quote Generator', function() {
  it('should generate a random quote', function() {
    const quote = generateRandomQuote();
    expect(quote).to.be.a('string');
  });
});
