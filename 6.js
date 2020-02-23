//6) Write function that translates a text to Pig Latin and back.
//English is translated to Pig Latin by taking the first letter of every word,
//moving it to the end of the word and adding ‘ay’.
//“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

const translateToPigLatin = function(text) {
  if (typeof text !== "string") {
    console.log("You must enter a string.");
    return;
  }
  const arrOfWords = text.split(" ");

  const arrsInArr = arrOfWords.map(item => item.split(""));
  console.log(arrsInArr);
  let withoutFirstLetter = arrsInArr.map(elem =>
    elem.splice(1, elem.length - 1, "ay").join("")
  );
  console.log(withoutFirstLetter);
  let firstLetter = arrsInArr.map(elem => elem.join(""));
  console.log(arrsInArr);
  console.log(firstLetter);
  let connected = [];
  for (let i = 0; i < firstLetter.length; i++) {
    connected.push(withoutFirstLetter[i] + firstLetter[i]);
  }
  connected = connected.map(word => word.toLowerCase()).toString();

  connected = connected.replace(
    connected.charAt(0),
    connected.charAt(0).toUpperCase()
  );
  console.log(connected.split(",").join(" "));
};

translateToPigLatin("The quick brown fox");
