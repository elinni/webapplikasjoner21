// Oppgave 1
//Lage lytter på knappen og en funksjon som fjerner tekst ved trykk
//Henter ut html elementer med #id som trengs
const deleteBtn = document.getElementById("remove-btn");
const deleteText = document.getElementById("remove");

//"klikk" er eventet som skal lyttes etter
deleteBtn.addEventListener('click', () => {
  deleteText.innerHTML = null; //fjerner tekst i html ved klikk
});


// Oppgave 2
//Henter ut html elementer med #id som trengs
const changeText = document.getElementById('change');
const changeBtn = document.getElementById('change-btn');

//"klikk" er eventet som skal lyttes etter 
changeBtn.addEventListener('click', () => {
  changeText.replaceWith('Dette er teksten som er endret!'); //endrer tekst i html ved klikket
});

// Oppgave 3
//Henter ut html elementer med #id som trengs
const input = document.getElementById('input');
const inputText = document.getElementById('input-text');


//Fjerner default teksten 
const removeText = () => {
  inputText.innerHTML = null;
};


//lager funksjonen som lytter etter eventet 
const textInput = (event) => {
  let letter = event.key;
  inputText.innerHTML += letter;
};

//ved tastetrykk kaller jeg på funksjonene for å fjerne og sette inn bokstaver
input.addEventListener('keypress', textInput, removeText());

// Oppgave 4
//Henter ut html elementer med #id som trengs
const myList = ["item one", "item two", "item three"];
const list = document.getElementById('ul');
const btn = document.getElementById('write-list');

//Lager en funksjon som skal lage listen, bruker .map og .join
const createList = () => {
  const liElement = myList.map((listElement) => `<li>${listElement}</li> `);
  list.innerHTML = liElement.join('');
};

btn.addEventListener('click', createList);

// Oppgave 5
//Henter ut html elementer med #id som trengs
const select = document.getElementById('select');
const placeholder = document.getElementById('placeholder');
const createBtn = document.getElementById('create');
const text = document.getElementById('text');

//lager funksjon som registrerer klikk og lytter til valg og input
createBtn.addEventListener('click', () => {
  let choose = select.value;
  let addText = text.value;

  
  placeholder.innerHTML += `<${choose}>${addText}</${choose}>`;
});

// Oppgave 6
//Henter ut html elementer med #id som trengs
const listR = document.getElementById('list');
const removeList = document.getElementById('remove-li');

//Fjerner et element i listen for hvert klikk
removeList.addEventListener('click', () => {
  let lElement = listR.querySelector('li');
  listR.removeChild(lElement);
});

// Oppgave 7
//Henter ut html elementer med #id som trengs 
const nameInput = document.getElementById('name');
const disableBtn = document.getElementById('order');

//lager funksjonen som lytter til keypress/tast
//endrer border til rød hvis det er 4 eller flere tall, ellers sort border
nameInput.addEventListener('keypress', () => {
  if(nameInput.value.length >= 4) {
    disableBtn.disabled = true;
    disableBtn.style = 'border: solid red 1px;';
  } else {
    disableBtn.disabled = false;
    disableBtn.style = 'border: solid black 1px;';
  }
});

// Oppgave 8
//Henter ut html elementer med #id som trengs
const listParent = document.querySelector('.children');
const listParentChild= document.querySelectorAll('li');
const colorBtn = document.getElementById('color');

//Funksjon som endrer farge på border
const border = () => {
  listParentChild.forEach((li, listNr) => {
    if((listNr +1) % 2 === 0) {
      li.style = 'border: 2px solid teal;';
    } else {
      li.style = 'border: 2px solid red;';
    }
  });
};

colorBtn.addEventListener('click', border);
