function sortAnimal(animal) {
  // Return sorted animals
    return animal ? animal.sort((a, b) => {
      if (a.numberOfLegs < b.numberOfLegs) return -1
      else if (a.numberOfLegs > b.numberOfLegs) return 1
      else {
        if (a.name < b.name) return -1
        else if (a.name > b.name) return 1
        else return 0
      }
    }) : null
}
