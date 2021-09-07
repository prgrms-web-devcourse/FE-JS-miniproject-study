document.querySelector('.btn').addEventListener('click', () => {
    const colorCode = '#' + Math.round(Math.random() * 0xffffff).toString(16)
    document.querySelector('.container').style = `background-color: ${colorCode}`
})
