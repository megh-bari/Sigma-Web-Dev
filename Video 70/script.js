let colors = ["red", "greenyellow", "yellow", "orange", "blue", "aqua","chocolate", "chartreuse", "cyan", "lime", "blueviolet", "hotpink", "maroon", "teal"]

let boxes = document.querySelectorAll(".box").forEach(e=>{
    let randomColorGenerate = Math.floor(Math.random()*colors.length)
    e.style.backgroundColor = colors[randomColorGenerate]
})