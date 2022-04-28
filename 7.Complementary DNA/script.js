function DNAStrand(dna){
    const code = {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    }
    return dna.split('').reduce((init, i) => init + code[i], '')
  }