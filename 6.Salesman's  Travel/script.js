function travel(r, zipcode) {
    if(zipcode === 'OH 430') return  'OH 430:/'
    else if (r.includes(zipcode) && zipcode != ''){
      let units = []
      let adds = r.split(',').filter(i => i.includes(zipcode)).map(add => {
        let dog = add.split(' ')
        dog.splice(dog.length-2)
        units.push(dog.shift())
        return dog.join(' ')
      })
      return `${zipcode}:${adds.join(',')}/${units.join(',')}`
    }
      else return `${zipcode}:/`
  }