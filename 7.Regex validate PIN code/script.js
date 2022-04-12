function validatePIN (pin) {
    let good = true
    if (pin.length ==4 || pin.length == 6) {
      for (const i of pin) {
        if (isNaN(i) == true || i=='\n') {good = false}
      }
      return good
    } else {return false}
  }