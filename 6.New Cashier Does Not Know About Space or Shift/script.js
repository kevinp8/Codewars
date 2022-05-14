function getOrder(input) {
  const menu = {
    1: 'Burger',
    2: 'Fries', 
    3: 'Chicken',
    4: 'Pizza',
    5: 'Sandwich',
    6: 'Onionrings',
    7: 'Milkshake',
    8: 'Coke',
  }
  while ((/[a-zA-Z]/).test(input)) {
    input = input.replace('burger', '1').replace('fries', '2').replace('chicken', '3').replace('pizza', '4').replace('sandwich', '5').replace('onionrings', '6').replace('milkshake', '7').replace('coke', '8')
  }
  return input.split('').sort().map(item => menu[item]).join(' ')
}