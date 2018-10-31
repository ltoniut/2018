export function Person(id, name, age, gender) {
  this.id = id,
    this.name = name,
    this.age = age,
    this.gender = gender

    this.translatedGender = new function() {
      let translation;

      switch(this.gender) {
        case "male":
          return "Hombre";
          break;
        case "female":
          return "Mujer";
          break;
        case "other":
          return "Otros";
          break;
        default:
          return "Error";
      }
    }
}