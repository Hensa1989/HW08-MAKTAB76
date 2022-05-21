function Student(name, gender) {
  this._name = name;
  this._gender = gender;
}

let studObj = new Student();
Student.prototype.age = 32;

console.log(studObj.age);

let studObj2 = new Student();
let studObj1 = Object.getPrototypeOf(studObj2);
Student.prototype.age = 20;

console.log(studObj1.age);
