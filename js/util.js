'use strict'


/*function makeid(length) {
   var text = ''
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for(var i=0; i < length; i++){
            text += possible.charAt(Math.floor(Math.random() 
            * possible.length));
        }
        return text
}*/

function makeid() {
  for (var i = 0; i < 99; i++) {
    const bookId = i
  }
  return bookId
}



function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() 
        * (maxFloored - minCeiled + 1) + minCeiled)
;}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}