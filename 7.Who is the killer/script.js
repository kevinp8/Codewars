function killer(suspectInfo, dead) {
    for (const key in suspectInfo) {
      let bool = dead.every(i => {return suspectInfo[key].includes(i)})
      if (bool) {return key}
    }
  }