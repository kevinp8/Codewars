function race(v1, v2, g) {
	if (v1>v2) return null
	else{
		let decimalTime = g/(v2-v1)
		let splitAtDecimal = decimalTime.toString().split('.')
		let hour = parseInt(splitAtDecimal[0])
		splitAtDecimal = (parseFloat('0.'+splitAtDecimal[1])*60).toString().split('.')
		let minute = parseInt(splitAtDecimal[0])
		let second = Math.floor(parseFloat('0.'+splitAtDecimal[1])*60)
		if (second == 59) {
			second = 0
			minute++
		}
		return [hour, minute, second]
	}
}