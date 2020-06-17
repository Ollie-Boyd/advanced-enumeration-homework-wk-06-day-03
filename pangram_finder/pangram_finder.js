const PangramFinder = function (phrase) {
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const pattern = new RegExp(/[a-z]/)
  const phraseArr = Array.from(this.phrase.toLowerCase()).filter(letter => pattern.test(letter)).sort()
  const uniqueLetters = new Set(phraseArr)
  return uniqueLetters.size === 26
}

module.exports = PangramFinder;
