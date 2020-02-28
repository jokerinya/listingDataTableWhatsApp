// function declaretion

// önde(); buna ulaşırız

function önde() {
  console.log('evrensel fonksiyon');
}

önde();

// function expression
// altta(); const ile tanımlanan fonksiyona bu şekilde üstte ulaşamayız.
const altta = function() {
  console.log('tanım sonrası fonksiyon');
};

altta();

// const deneme = function() {
//   return 'Naber';
// };

const deneme = function() {
  return 'Naber';
};

const greeting = deneme();
console.log(greeting);
// console.log(greeting()) yapınca hata veriyor..

// arrow function

const adam = gün => 'Merhaba';
// returns merhaba
const hello = adam();
// hello ya atanır. direk adam() yazdılırsa olmaz hata verir
console.log(hello);
