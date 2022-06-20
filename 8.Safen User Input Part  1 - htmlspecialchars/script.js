function htmlspecialchars(formData) {
  return formData.split('').map(char => {
    if (char == '<') return '&lt;'
    else if (char == '>') return '&gt;'
    else if (char == '"') return '&quot;'
    else if (char == '&') return '&amp;'
    else return char
  }).join('')
}