class Translator {
  constructor() {
    const string = "AaEeIiOoUuYy";
    const vowels = string.split("");
    let ay = "ay ";

    this.toPigLatin = function(str) {
      let array = str.split(" ");

      let translation = "";

      for (let i = 0; i < array.length; i++) {
        let firstHalf;
        let secondHalf;
        let foundVowel = false;
        for (let j = 0; j < array[i].length; j++) {
          for (let k = 0; k < vowels.length; k++) {
            if (array[i][j] === vowels[k] && !foundVowel) {
              firstHalf = array[i].substring(0, j);
              secondHalf = array[i].substring(j);
              translation += secondHalf + "-" + firstHalf + ay;
              foundVowel = true;
            }
          }
        }
      }
      translation = translation.trim();
      return translation;
    };

    this.toEnglish = function(str) {
      let array = str.split(" ");

      let translation = "";

      for (let i = 0; i < array.length; i++) {
        let partsArray = array[i].split("-");
        let word = "";
        if (partsArray[1] !== "ay") {
          let firstHalf = partsArray[1].slice(0, partsArray[1].length - 2);
          word += firstHalf + partsArray[0];
        } else {
          word = partsArray[0];
        }
        translation += word + " ";
      }

      translation = translation.trim();

      return translation;
    };
  }
}

module.exports = Translator;
