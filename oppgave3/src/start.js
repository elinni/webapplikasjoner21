import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  const wordList = text.split(" "); //deler opp setningen til en ordliste(array) med en spit funksjon

  let longestWord = wordList[0]; //velger at inbdex 0, det første ordet til sammenlikning til if-spørring
  //lager en løkke som løper igjennom hvert ord, for å finne det lengste
  // lager deretter en if spørring som løper igjennom ordlisten
  //logger deretter det ordet som spør etter det lengste ordet
  wordList.forEach((word) => {
    if (word.length > longestWord.length) {
      //if-spørring som løper igjennom arraylisten wordList, sjekker om det er et ord som er lengre enn hverandre gjennom hele listens lengde
      longestWord = word; //skriver ut ord som er lengre enn det første ordet
    }
  });
  return longestWord; //returnerer det lengste ordet
};

console.log(longestWord()); //printer det lengste ordet, skal være verylongwordthatislong
