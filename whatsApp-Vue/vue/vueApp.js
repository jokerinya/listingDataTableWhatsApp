var app1 = new Vue({
  el: '#computed',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    score: 0,
    num: 0
  },
  methods: {
    numArtis() {
      this.num++;
    },
    scoreArtis() {
      this.score++;
    },
    reset() {
      this.score = 0;
      this.num = 0;
    }
  },
  computed: {
    // ana mantık, datadaki bir bilgiyi return etmek bu sayede daha efective oluyor
    addToNum() {
      return this.num;
    },
    addToScore() {
      return this.score;
    }
  }
});
