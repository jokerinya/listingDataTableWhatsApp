// const user = {
//   name: 'ibrahim',
//   surname: 'şakacı'
// };

// console.log(this);

const adı = 'ismail';

const user = {
  adı: 'ibrahim',
  puan: 5,
  isle: function() {
    console.log(this.adı);
  },
  isler() {
    console.log(this.adı);
  },
  islerTabiki: () => {
    console.log(adı);
  },
  islemez: () => {
    console.log(this.adı);
  }
};

user.isle(); // ibrahim

user.isler(); // ibrahim

user.islerTabiki(); // // ismailThis kullanamazsın bunda

user.islemez(); // undefined Global this e gider çünkü
