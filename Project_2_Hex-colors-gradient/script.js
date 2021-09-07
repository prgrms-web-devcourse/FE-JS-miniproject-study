const changeGradient = () => {
  const startColor = ["#CD5C5C", "#FA8072", "#E9967A", "#FF7F50", "#FF6347", "#FFA07A", "#FFD700", "#FAFAD2"]
  const endColor = ["#DB7093", "#FFB6C1", "#E6E6FA", "#DDA0DD", "#90EE90", "#EEE8AA"]

  document.querySelector("button").addEventListener("click", e => {
    const start = startColor[Math.floor(Math.random()*startColor.length)]
    const end = endColor[Math.floor(Math.random()*endColor.length)]
    
    document.querySelector(".color-code").innerHTML = `
        background: linear-gradient(to right, ${start}, ${end});
      `
    document.body.style.background = `linear-gradient(${start}, ${end})`
  })
}

changeGradient()