function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let blues = blueStart - bluePulled
  let red = redStart - redPulled
  return blues/(blues + red)
}