var app = new Vue({
  el: '#app',
  data: {
    message: 'Film Ajandası',
    yeniFilm: {},
    backdrop: false,
    addModal: false,
    deleteModal: false,
    filmler: [
      {
        id: 1,
        adi: 'Maskeli Beşler',
        url: 'https://productimages.hepsiburada.net/s/7/431/8910403600434.jpg',
        aciklama: 'Oldukça Eğlenceli ve Komik Bir Filmdi.'
      },
      {
        id: 2,
        adi: 'Matrix',
        url:
          'https://upload.wikimedia.org/wikipedia/fi/thumb/c/c1/The_Matrix_Poster.jpg/250px-The_Matrix_Poster.jpg',
        aciklama: 'Heyecan dolu, macera, aksiyon ve felfese icerikli bir film.'
      }
    ],
    yil: '',
    index: ''
  },
  methods: {
    yeniFilmAc() {
      this.backdrop = true;
      this.addModal = true;
      this.yeniFilm = {};
    },
    yeniFilmKapat() {
      this.backdrop = false;
      this.addModal = false;
      this.deleteModal = false;
      this.yeniFilm = {};
    },
    yeniFilmBilgi() {
      this.yeniFilm.id = Math.random().toString();
      if (!this.yeniFilm.url) {
        this.yeniFilm.url =
          'https://i.pinimg.com/originals/69/e2/b3/69e2b3be6001c33141a95557a5f2cbcd.png';
      }
      this.filmler.push(this.yeniFilm);
      this.yeniFilmKapat();
    },
    deleteFilm(index) {
      this.deleteModal = true;
      this.backdrop = true;
      this.index = index;
    },
    filmSilmeyiOnay() {
      this.filmler.splice(this.index, 1);
      this.yeniFilmKapat();
    }
  },
  created() {
    this.yil = new Date().getFullYear();
    console.log(this.filmler.length);
  }
});
