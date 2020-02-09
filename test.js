// acronym - take letters and use reduce to create an acronym
function acronym(arr) {

    return arr.reduce(((acc, currentElem) => acc + currentElem.slice(0,1)), '')

  }
  console.log(acronym(['very', 'important', 'person']))

// function acronym(arr) {
//     return arr.reduce(((x, y) => x + y.slice(0, 1)), '').toUpperCase()
// }


// console.log(acronym(['very', 'important', 'person']));