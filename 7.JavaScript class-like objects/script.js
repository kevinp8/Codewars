// create your Animal class like object here
function Animal(name, type){
  this.name = name;
  this.type = type;
  this.toString = () => `${this.name} is a ${this.type}`
}