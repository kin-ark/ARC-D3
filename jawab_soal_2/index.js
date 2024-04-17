// Input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// List
const options = ['Play Game', 'Nah'];

// Callback function
function playGame(callback) {
  const number = Math.floor(Math.random() * 5) + 1;

  rl.question('Guess a number between 1 and 5: ', (answer) => {
    const guess = parseInt(answer);
    if (guess === number) {
      console.log("YOU WITCH! HOW DO YOU KNOW!?!?");
    } else {
      console.log(`Of course, you wouldn't know. It was ${number} btw.`);
    }
    callback();
  });
}

function askQuestion(question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

// async await
async function mainMenu() {
  let choice;

  console.log('\nWelcome, you ordinary human. Do you want to play a game?');
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  do {
    const answer = await askQuestion('Choose an option: ');
    choice = parseInt(answer);
    if (choice === 1) {
      await new Promise(resolve => playGame(resolve));
      console.log("*You left");
      rl.close();
    } else if (choice === 2) {
      console.log("*You left.");
      rl.close();
    } else {
      console.log('Invalid answer. Choose again!');
    }
  } while (choice !== 1 && choice !== 2);
}



mainMenu();
