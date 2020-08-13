export function modal() {
  let popupWrapper = document.getElementById("popup")
  let popup = document.querySelector(".popup")
  let phone = document.querySelector(".header__right")
  let phone2 = document.querySelector(".main__phone")
  let close = document.querySelector(".close")

  phone.addEventListener("click", event => popupWrapper.classList.remove("hide"))
  phone2.addEventListener("click", event => popupWrapper.classList.remove("hide"))
  close.addEventListener("click", event => popupWrapper.classList.add("hide"))
  phone.addEventListener("click", event => popupWrapper.classList.remove("hide"))
  popupWrapper.addEventListener("click", event => popupWrapper.classList.add("hide"))
  popup.addEventListener("click", event => event.stopPropagation())
}