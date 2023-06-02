const input = document.getElementById('input');
const submitButton = document.getElementById('button1');
const hintButton = document.getElementById('button2');
const output = document.getElementById('output');
const quote = document.getElementById('movie-line');
const hintPart = document.getElementById('hint');
const maxGuesses = 3;

const movies = [
  {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
  {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
  {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
  {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
  {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
  {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
  {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
  {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
  {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
  {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
  {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
 ]

 const randomNum = Math.round(Math.random() * 10);
 const randomMovie = movies[randomNum].title;
 const explanation = movies[randomNum].explanation;
 const hint = movies[randomNum].hint;

 quote.innerHTML = explanation;

 let guessNumber = 1;
 let guessed = false;

submitButton.addEventListener('click', (e) => {

  const elem1 = document.createElement('div');
  elem1.classList.add('alert');
  output.innerHTML = '';

  if (input.value == randomMovie && guessed == false) {
      elem1.classList.add('alert-success');
      elem1.innerHTML = 'Yes it was ' + randomMovie + '. Refresh page to play again.';
      guessed = true;
  } else if (guessed == false && guessNumber >= maxGuesses) {
    elem1.classList.add('alert-danger');
    elem1.innerHTML = 'No it was ' + randomMovie;
    alert('Maximum guesses reached. The correct answer was ' + randomMovie + '. Click OK to restart the game');
    window.location.reload();
  }
  else {
    elem1.classList.add('alert-danger');
    elem1.innerHTML = 'Incorrect... try again.';
    guessNumber += 1;
  }

  output.appendChild(elem1);
});

hintButton.addEventListener('click', (e) => {
  hintPart.innerHTML = hint;
});