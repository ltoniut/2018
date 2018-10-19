import Person from "../prototypes/Person";

let id = 0;
let limit = 50;
let start = 0;


 export default {
  people: [],
  get(gender, s = start, l = limit) {
    let filtered = gender ? people.filter(p => p.gender = gender) : people;

    filtered = filtered.slice(s, s + l);

    return filtered;
  },
  getOne(id) {
    const person = people.find(p => p.id === id);

    if (person) {
        return person;
    }
    else {
        throw new Error("Person not identified");
    }
  },
  create(person) {
    const newPerson = new Person(person, id);
    
    id++;
    people.push(newPerson);
  },
  update(person) {
    oldPerson = people.find(p => p.id = person.id)

    oldPerson = person;
  },
  delete(id) {
    people = people.filter(p => p.id != id);
  }
}