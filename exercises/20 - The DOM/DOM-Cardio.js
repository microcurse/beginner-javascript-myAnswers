// Make a div
const makeDiv = document.createElement('div');

// add a class of wrapper to it
makeDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(makeDiv);

// make an unordered list
const makeList = document.createElement('ul');

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const list = `
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
`

const wrapper = document.querySelector('.wrapper');

wrapper.insertAdjacentHTML('afterbegin', list);

// create an image
const myImage = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
myImage.src = 'https://picsum.photos/500';
myImage.width = '250';
myImage.height = '250';
myImage.classList.add('cute');
myImage.alt = 'Cute Puppy';
wrapper.appendChild(myImage);


// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
  <div class="myHTML">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
`
wrapper.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
// remove the first paragraph
const myDiv = makeDiv.querySelector('.myHTML');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {

  const html = `
    <div class="playerCard">
      <h2>${name}- ${age}</h2>
      <p>He was ${height} and ${age} years old. In Dog Years this person would be ${age * 7}. That would be a tall dog!</p>
      <button class="delete">Delete!</button>
      </div>
    
  ` 
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');
wrapper.appendChild(divCards);

// Have that function make 4 cards

// doing a little extra by setting it up as an object and trying to iterate over them to create each card. Having difficulty using the spread array method since it's an object, not an array.
const resistance = [
  { name: 'Obi', age: 86, height: '6ft' },
  { name: 'Han', age: 28, height: '5.8ft' },
  { name: 'Luke', age: 26, height: '5.6ft' },
  { name: 'Leia', age: 26, height: '5.5ft' }
]

const cResistance = {...resistance};

let card = generatePlayerCard.apply(...resistance);

console.log(card);

// append those cards to the div
divCards.insertAdjacentHTML('afterbegin', card);

// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
