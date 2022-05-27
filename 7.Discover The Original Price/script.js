function discoverOriginalPrice(discountedPrice, salePercentage){
  return Number((discountedPrice/(1-(salePercentage/100))).toFixed(2))
}