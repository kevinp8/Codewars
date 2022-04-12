const cannonsReady = (gunners) => {
    for (const gun in gunners) {
      if (gunners[gun] == 'nay') {
        return 'Shiver me timbers!'
      }
    }
    return 'Fire!'
  }