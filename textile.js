/*!
 * Textile.js JavaScript Library v0.0.1
 * http://textile.github.io
 *
 * Copyright 2016-2017 進擊的燊
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-04-03
 */

(function(window, undefined) {
    var
        doc = window.document,
        defualtStyle = "display:inline-block;",
        Textile = function(node) {
            var content = node.innerHTML,
                wordsArr = content.split(' '),
                wordsDiv,
                letterDiv;
            this.words = [];
            this.letters = [];
            this.contentClone = content;
            node.innerHTML = '';
            for (var i = 0, wordslen = wordsArr.length; i < wordslen;) {
                wordsDiv = doc.createElement('div');
                wordsDiv.style.cssText += defualtStyle;
                var word = wordsArr[i++],
                    letterArr = word.split('');
                for (var j = 0, letterlen = letterArr.length; j < letterlen;) {
                    letterDiv = doc.createElement('div');
                    letterDiv.style.cssText += defualtStyle;
                    var letter = letterArr[j++];
                    letterDiv.insertAdjacentHTML('afterbegin', letter);
                    wordsDiv.appendChild(letterDiv);
                    this.letters.push(letterDiv);
                }
                node.appendChild(wordsDiv);
                this.words.push(wordsDiv);
                if (i !== wordsArr.length) {
                    wordsDiv.insertAdjacentHTML('afterEnd', ' ');
                }
            }
        }
        Textile.prototype.revert = function(){
            node.innerHTML = this.contentClone;
        }
    window.Textile = window.T = Textile;
})(window);