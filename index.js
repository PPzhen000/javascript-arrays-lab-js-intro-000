const app = "I don't do much."

const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kitten){
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
