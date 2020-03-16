// json çalışması
const json =
  '{"info": [{"name": "Tiger Nixon", "duty": "System Architect","location": "Edinburgh","age": 61,"income": "320800"},{"name": "Garrett Winters","duty": "Accountant","location": "Tokyo","age": 63,"income": "170750"},{"name": "Ashton Cox","duty": "Junior Technical Author", "location":"San Francisco","age": 66,"income": "86000"},{"name": "Cedric Kelly","duty": "Senior Javascript Developer","location": "Edinburgh","age": 22,"income": "433060"},{"name": "ibrahim","duty": "System Architect","location": "Turkey","age": 30,"income": "8000"},{"name": "Havali","duty": "Mal","location": "Tokyo","age": 1,"income": "1000000"}]}';
const obj = JSON.parse(json);

obj.info.forEach(element => {
  console.log(element.name);
});

console.log(obj.info[1].age);
// expected output: 61

var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    bilgiler: [
      {
        name: 'Tiger Nixon',
        duty: 'System Architect',
        location: 'Edinburgh',
        age: 61,
        income: 320800
      },
      {
        name: 'Garrett Winters',
        duty: 'Accountant',
        location: 'Tokyo',
        age: 63,
        income: 170750
      },
      {
        name: 'Ashton Cox',
        duty: 'Junior Technical Author',
        location: 'San Francisco',
        age: 66,
        income: 86000
      },
      {
        name: 'Cedric Kelly',
        duty: 'Senior Javascript Developer',
        location: 'Edinburgh',
        age: 22,
        income: 433060
      },
      {
        name: 'ibrahim',
        duty: 'System Architect',
        location: 'Turkey',
        age: 30,
        income: 8000
      },
      {
        name: 'Havali',
        duty: 'Mal',
        location: 'Tokyo',
        age: 1,
        income: 1000000
      }
    ],
    denemeler: obj, //bu jsondan geldi..
    resources: '',
    filterDeneme: ''
  },
  methods: {},
  computed: {
    filteredResources() {
      // ufak bir hata veriyor ama çalışıyor
      return this.resources.filter(resource => {
        for (const item in resource) {
          if (resource[item].toString().includes(this.filterDeneme))
            return true;
        }
      });

      // return resource.includes(this.filterDeneme);
    }
  },
  beforeMount() {
    console.log(this.denemeler);
    // GET /someUrl
    this.$http
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        // console.log(response.bodyText); //bu JSON
        // console.log(response.body); // bu JS OBJ
        // this.resources = response.body; // ben  bilerek bunu kullanmadım.
        this.resources = JSON.parse(response.bodyText);
      });
  }
});

Vue.use(VueResource);
