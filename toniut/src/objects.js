function Map(id, name, description, varieties, realms) {
  this.id = id,
  this.name = name,
  this.description = description,
  this.varieties = varieties,
  this.realms = realms
}

function Realm(id, name, description, cities) {
  this.id = id,
  this.name = name,
  this.description = description,
  this.cities = cities
}

function User(id, name, password) {
  this.id = id,
  this.name = name,
  this.password = password
}

export { Map, Realm };

  //MODIFY EVERYTHING