const texts = ["search news based on news source", "see top-headlines", "see news based on news source", "see news based on your current location", "bookmark news", 
"download news content as text file", "share news among your friends", "and more..."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 120);  // infinite loop, called after each 150ms
}());  // self-invoked function