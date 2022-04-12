function DNAtoRNA(dna) {
    return dna.split('').map(i => {return i == 'T' ? 'U' : i}).join('')
  }