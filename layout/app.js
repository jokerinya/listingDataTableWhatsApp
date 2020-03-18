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
        adi: ' Ailecek Şaşkınız',
        url:
          'https://www.fullizlet.com/wp-content/uploads/2019/04/1520248689_5a9d2771491e8.jpg',
        aciklama: 'Komikti, Tam bir aile filmi.'
      },
      {
        id: 3,
        adi: 'Node Js',
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKMt5bEr64f9qI1h98KTczaOR2X0CW3GmHFaJHD_Ty8OmPOsyz',
        aciklama: 'Her Web Developer ın öğrenmesi gereken dil.'
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
