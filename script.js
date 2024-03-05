function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // Substitui a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("scr", "./assets/avatar-light.png")
  } else {
    img.setAttribute("scr", "./assets/avatar.png")
  }
}
