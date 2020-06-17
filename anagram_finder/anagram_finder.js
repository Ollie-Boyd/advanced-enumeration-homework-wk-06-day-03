const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const wordLetterArr = Array.from(this.word.toLowerCase()).sort()

    const foundAnagrams = otherWords.filter((otherWord) => {

        otherWordLetterArr = Array.from(otherWord.toLowerCase()).sort()

        if (otherWordLetterArr.length !== wordLetterArr.length || this.word === otherWord) { return false}

        return otherWordLetterArr.every((letter, index) => {return letter === wordLetterArr[index]});
    })

    return foundAnagrams
}

module.exports = AnagramFinder;
