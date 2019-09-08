const chai = require("chai");
const expect = chai.expect;
const Translator = require("../translator.js");

describe("Translate to Pig Latin", function() {
  const translator = new Translator();

  it("Single word", function() {
    const result = translator.toPigLatin("Help");
    expect(result).to.equal("elp-Hay");
  });

  it("Full sentence", function() {
    const result = translator.toPigLatin(
      "The quick brown fox jumped over the lazy dog"
    );
    expect(result).to.equal(
      "e-Thay uick-qay own-bray ox-fay umped-jay over-ay e-thay azy-lay og-day"
    );
  });
});

describe("Translate to English", function() {
  const translator = new Translator();

  it("single word", function() {
    const result = translator.toEnglish("elp-Hay");
    expect(result).to.equal("Help");
  });

  it("full sentence", function() {
    const result = translator.toEnglish(
      "e-Thay uick-qay own-bray ox-fay umped-jay over-ay e-thay azy-lay og-day"
    );
    expect(result).to.equal("The quick brown fox jumped over the lazy dog");
  });
});
