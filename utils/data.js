const firstNames = [
    "John",
    "Jane",
    "Jack",
    "Jill",
    "Joan",
    "Jerome",
    "Janice",
    "Judy",
    "Jasmine",
    "Jared",
    "Jocelyn",
    "Jenna",
    "Javier",
    "Jade",
    "Jamar",
];

const lastNames = [
    "Smith",
    "Doe",
    "Johnson",
    "Jackson",
    "Jenkins",
    "Jennings",
    "Jameson",
    "Jensen",
    "Jett",
    "Judd",
    "Thomas",
    "Young",
    "Hernandez",
];

const thoughts = [
    "I love the outdoors!",
    "Baseball is my favorite sport!",
    "Jazz is my favorite music!",
    "Pizza is my favorite food!",
    "eSports are my favorite!",
    "Quidditch is my favorite sport!",
    "Video games are my favorite!",
    "Netflix is my favorite!",
    "Xbox is my favorite!",
    "Zelda is my favorite game!",
    "Biking is my favorite!",
    "Coding is my favorite!",
    "Reading is my favorite!",
    "Writing is my favorite!",
    "Singing is my favorite!",
];

const reactions = [
    "I love this!",
    "I hate this!",
    "Ugh!",
    "Yay!",
    "This is the best!",
    "This is the worst!",
    "Really?",
    "Please stop!",
    "Wow!",
    "Everyone should see this!",
    "Nice!",
    "Cool!",
    "Awesome!",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => `${getRandomArrItem(firstNames)} ${getRandomArrItem(lastNames)}`;

const getRandomThought = () => {
    return getRandomArrItem(thoughts);
};


const getRandomReaction = () => {
    return getRandomArrItem(reactions);
};

module.exports = { getRandomThought, getRandomReaction, getRandomName };