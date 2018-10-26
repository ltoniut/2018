let people = [];
let lastId = 0;

function getStorage() {

  if (window.localStorage.getItem("people")) {
    people = JSON.parse(window.localStorage.getItem("people"))
    lastId = window.localStorage.getItem('lastId')
  } else {
    people = []
    lastId = 0;
  }

}

function setStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export default {
  getAll() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        getStorage()
        res(JSON.parse(window.localStorage.getItem("people")) || [])
      }, Math.random() * 2000 + 500)
    })
  },
  create(person) {

    person.id = ++lastId;
    people.push(person);
    setStorage('people', people);
    setStorage('lastId', lastId);
  },

  getByGender(gender) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          getStorage()

          let peopleFilter = people;
          if (gender !== '') {
            peopleFilter = peopleFilter.filter(person => person.genero === gender)
          }
          resolve(peopleFilter)
        }, 2000);
    });
  },
  delete(id) {
    getStorage();
    people = people.filter(person => person.id !== id);
    setStorage('people', people);
  },

  update(person) {
    getStorage();
    const key = people.findIndex(personArray => personArray.id === person.id)
    people.splice(key, 1, person);
    setStorage('people', people);
  },

  getOne(id) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          getStorage();
          resolve(people.find(person => person.id === id));
        }, Math.random() * 2000 + 500);
    });
  },
}