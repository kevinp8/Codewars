function getDrinkByProfession(param){
    let menu = {
      jabroni: 'Patron Tequila',
      'school counselor': 'Anything with Alcohol',
      programmer: 'Hipster Craft Beer',
      'bike gang member': 'Moonshine',
      politician: 'Your tax dollars',
      rapper: 'Cristal'
    }
    return menu[param.toLowerCase()] ? menu[param.toLowerCase()] : 'Beer'
  }