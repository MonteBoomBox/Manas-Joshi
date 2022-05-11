const isOnline = true

if (!isOnline) {
  document.documentElement.style.setProperty("--online-bg", "#cd4c4c")
}

const slideUp = {
  duration: 1500,
  origin: "bottom",
  distance: "10%"
}

const slideDown = {
  duration: 1500,
  origin: "top",
  distance: "10%"
}

const slideLeft = {
  duration: 1500,
  origin: "right",
  distance: "10%"
}

ScrollReveal().reveal(".title", { ...slideDown })
ScrollReveal().reveal(".subtitle", slideUp)

ScrollReveal().reveal("li", {
  duration: 1500,
  origin: "right",
  distance: "10%",
})