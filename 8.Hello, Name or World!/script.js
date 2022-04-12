function hello(name) {
    return name ? `Hello, ${name[0].toUpperCase()+name.toLowerCase().slice(1)}!` : 'Hello, World!'
  }