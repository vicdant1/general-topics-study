// ^ TIME -> waits this amount of ms to write the rest
// ` word ` -> wont type this word

var typed = new Typed('.element', {
  strings: ['Vue.js', 'React.js', 'Microsoft^500 .NET', 'git push --force ^1000 `pushed to origin with option force`'],
  typeSpeed: 30,
  /*
  
  explore docs https://github.com/mattboldt/typed.js

  */
});