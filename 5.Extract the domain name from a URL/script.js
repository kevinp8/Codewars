function domainName(url){
  let dotSplit = url.split('.')
  if (dotSplit[0].includes('www')) return dotSplit[1]
  else if (dotSplit[0].includes('http')){
    let slashSplit = dotSplit[0].split('/')
    return slashSplit[2]
  } else {
    return dotSplit[0]
  }
}