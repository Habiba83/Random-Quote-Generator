const quotes = [
    "Be yourself; everyone else is already taken.\n- Oscar Wilde",
    "In three words I can sum up everything I've learned about life: it goes on.\n- Robert Frost",
    "No one can make you feel inferior without your consent.\n- Eleanor Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\n- Ralph Waldo Emerson",
    "The only way to do great work is to love what you do.\n- Steve Jobs",
    "Believe you can and you're halfway there.\n- Theodore Roosevelt",
    "Stay hungry, stay foolish.\n- Steve Jobs",
    "Life is what happens when you're busy making other plans.\n- John Lennon",
    "You only live once, but if you do it right, once is enough.\n- Mae West",
    "It does not matter how slowly you go as long as you do not stop.\n- Confucius",
    "The only thing necessary for the triumph of evil is for good men to do nothing.\n- Edmund Burke",
    "In the end, it's not the years in your life that count. It's the life in your years.\n- Abraham Lincoln",
    "The only true wisdom is in knowing you know nothing.\n- Socrates",
    "The journey of a thousand miles begins with one step.\n- Lao Tzu",
    "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\n- Bil Keane",
    "Life isn't about finding yourself. Life is about creating yourself.\n- George Bernard Shaw",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.\n- Winston Churchill",
    "The best way to predict the future is to invent it.\n- Alan Kay",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.\n- Nelson Mandela",
    "To live is the rarest thing in the world. Most people exist, that is all.\n- Oscar Wilde",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.\n- Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams.\n- Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today.\n- Franklin D. Roosevelt",
    "It's not whether you get knocked down, it's whether you get up.\n- Vince Lombardi",
    "The only person you should try to be better than is the person you were yesterday.\n- Anonymous",
    "Life is a succession of lessons which must be lived to be understood.\n- Helen Keller",
    "Happiness is not something ready made. It comes from your own actions.\n- Dalai Lama",
    "Dream big and dare to fail.\n- Norman Vaughan",
    "The only thing we have to fear is fear itself.\n- Franklin D. Roosevelt",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.\n- Ralph Waldo Emerson",
    "If you want to lift yourself up, lift up someone else.\n- Booker T. Washington",
    "It is during our darkest moments that we must focus to see the light.\n- Aristotle",
    "Keep your face always toward the sunshine - and shadows will fall behind you.\n- Walt Whitman",
    "You are never too old to set another goal or to dream a new dream.\n- C.S. Lewis",
    "The only way to do great work is to love what you do.\n- Steve Jobs",
    "Don't watch the clock; do what it does. Keep going.\n- Sam Levenson",
    "The best preparation for tomorrow is doing your best today.\n- H. Jackson Brown, Jr.",
    "Change your thoughts and you change your world.\n- Norman Vincent Peale",
    "The purpose of our lives is to be happy.\n- Dalai Lama",
    "Life is 10% what happens to us and 90% how we react to it.\n- Charles R. Swindoll",
    "The only way to do great work is to love what you do.\n- Steve Jobs",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\n- Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.\n- Jimmy Dean",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best.\n- St. Jerome",
    "In the midst of winter, I found there was, within me, an invincible summer.\n- Albert Camus",
    "Believe you can and you're halfway there.\n- Theodore Roosevelt",
    "The only thing necessary for the triumph of evil is for good men to do nothing.\n- Edmund Burke",
    "It always seems impossible until it is done.\n- Nelson Mandela",
    "You miss 100% of the shots you don't take.\n- Wayne Gretzky",
    "I have not failed. I've just found 10,000 ways that won't work.\n- Thomas A. Edison",
    "The only limit to our realization of tomorrow will be our doubts of today.\n- Franklin D. Roosevelt"
];
 generateButton = document.getElementById("generateButton");
quoteElement = document.getElementById("quote");

generateButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
     now = new Date().getTime();
     randomIndex = Math.floor((now * Math.random()) % quotes.length);
     [quote, author] = quotes[randomIndex].split('\n');
    quoteElement.innerHTML = `<p>&quot;${quote}&quot;</p><p>${author}</p>`;
}