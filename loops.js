function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.unshift("I am 1 strange loop.")
    } else {
      array.unshift("I am ${i} strange loops.")
    }
  } return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}


function doWhileLoop(array){
  do{
    array.shift
  } while (function maybeTrue() {
  return Math.random() >= 0.5
} && array.length > 0)
  return array
}
