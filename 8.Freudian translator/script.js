function toFreud(string) {
    return string.split(' ').map((i) => i ? 'sex': '').join(' ')
  }