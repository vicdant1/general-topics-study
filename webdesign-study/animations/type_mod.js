// ^ TIME -> waits this amount of ms to write the rest
// ` word ` -> wont type this word

var typed = new Typed('.element', {
  strings: ['Vue.js', 'React.js', 'Microsoft^500 .NET', 'git push --force ^1000\n `pushed to origin with option force`'],
  typeSpeed: 30,
  smartBackspace: true, // 'til same letters in the word, ex: Microsoft and Micronesia -> it will backspace til 'micro'
  // shuffle: true,
  // fadeOut: true, -> fade instead of use backspace
  loop: true,

  /*
  
  explore docs https://github.com/mattboldt/typed.js

  */
});


var typed2 = new Typed('#typed', {
  stringsElement: '#typed-strings',
  loop: true,
}); 

var type3 = new Typed('#teste-card', {
  stringsElement: '#card-text-typed',
  typeSpeed: 20
});