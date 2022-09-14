let quotes = [
    "Love is blind.", "A bird in the hand is worth two in the bush.", 
    "You can\'t make an omelet without breaking some eggs.", 
    "Absence makes the heart grow fonder.", "No pain, no gain.", 
    "Every cloud has a silver lining.", "If you can\'t beat \'em, join \'em.",
    "Just be yourself", "Stop worrying", "Don\'t worry", "Fake it until you make it",
    "Man up", "Take the emotion out of it", "Don\'t worry about what other people think about you.",
    "If they don\'t like you, they\'re just jealous of you.", "Don\'t take things so personally.",
    "Sticks and stones may break your bones but words can never hurt you.", 
    "Good things come to those who wait.", "Follow your passion", "Invest in crypto",
    "Have another drink to cure a hangover"
]

let preCursor = [
    "People always say", "Someone once told me", "Just remember", "A wise person once said",
    "Here\'s a bit of advice", "Everyone knows", "let me tell you", 
    "Let me impart some wisdom onto you;", "When you start to worry, just think;",
    "My mother always said", "My father always said", "My grandfather always said",
    "My grandmother always said", "As I always say", "Take it from me;", "A good thing to remember;",
    "Never forget that/to;", "I believe in/that/you should/should\'nt;", "It's a good thing that/to",
    "Most people would adovocate that", "As a result", "In short", "All in all", "By and large",
    "Overall", "On the whole", "In summary", "In conclusion", "Putting it all together",
    "To summarize", "Additionally", "Moreover", "Furthermore", "Even more important", "Also",
    "Just as important", "For example", "For instance", "To illustrate", "However", "That is why",
    "On the other hand", "Above all", "As usual", "Of course", "Generally speaking", "According to people",
]

let postCursor = [
    "🤯", "🤦🏽‍♂️", "🤷‍♀️", "🤭", "🤷‍♂️", "🤨", "😬", "😂", "🤪", "🙄", "😏", "😉", "😑", "🤔", "😝",
    "🤡", "💩", "🙈🙉🙊", "🦨", "🦉", "🗣", "👀", "🧠", "👴🏽", "👵🏽", "🧙🏽‍♀️", "🧙🏽‍♂️", "🧝🏽‍♀️", "🧝🏽‍♂️",
    "🤦🏽‍♀️", "🧘🏽‍♂️", "🧘🏽‍♀️", "👎🏽", "👏🏽👏🏽👏🏽👏🏽👏🏽👏🏽", "🎱", "🔮", "📜", "🍎", "🌌", "🪐", "🏛", "🌠",
    "☄", "🌀", "🌈", "⚡", "💫", "❗", "⁉", "‼", "❓", "💯", "⚠", "©", "💬", "ƪ(˘⌣˘)ʃ", "(⊙_⊙)？",
    "(。_。)", "＼（〇_ｏ）／", ".______.", "⚆_⚆", "→_→", "←_←", "ಠ_ಠ", "ಠಿ_ಠ", "(>ლ)", "눈_눈",
    "(¬_¬ )"
]


const randQuote = () => {
    let randomNumb = Math.floor(Math.random() * (quotes.length));
    let randomNumb2 = Math.floor(Math.random() * (preCursor.length));
    let randomNumb3 = Math.floor(Math.random() * (postCursor.length));
    document.getElementById("quoteDisplay").innerHTML = 
    `${preCursor[randomNumb2]} '${quotes[randomNumb]}' ${postCursor[randomNumb3]}`;
}
