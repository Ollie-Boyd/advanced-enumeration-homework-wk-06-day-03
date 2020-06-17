const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    const lettersArr = Array.from(this.word.toLowerCase())
    const uniqueLetters = new Set(lettersArr)
    return lettersArr.length === uniqueLetters.size
}

module.exports = IsogramFinder;
