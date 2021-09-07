const changeColor = () => {
  const colors = 
  ["orangered", "blue", "yellow", "green", 
  "orange", "cyan", "dodgerblue", "violet", 
  "navy", "purple", "yellowgreen", "orangered", 
  "slateblue", "salmon", "crimson", "hotpink", "magenta"]

  const BGColor = document.body.style.backgroundColor
  const currentColor = colors.indexOf(BGColor)
  document.body.style.backgroundColor = colors[currentColor+1]
}