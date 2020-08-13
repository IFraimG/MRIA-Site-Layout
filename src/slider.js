export function slider() {
  let preLeft = document.querySelector(".slider__card-4")
  let left = document.querySelector(".slider__card-2")
  let middle = document.querySelector(".slider__card-1")
  let right = document.querySelector(".slider__card-3")
  let preRight = document.querySelector(".slider__card-5")
  let end = document.querySelector(".slider__card-6")

  let elMiddle = document.querySelector(".slider__middle")

  let elements = [preLeft, left, middle, right, preRight, end]

  elMiddle.addEventListener("click", () => elements.forEach(item => elScroll(item)))
  elMiddle.addEventListener("click", () => roundLoad())
  elements.forEach(item => {
    item.addEventListener("click", () => elements.forEach(item => elScroll(item)))
    item.addEventListener("click", () => roundLoad())
  })
} 

let num = 1

function elScroll(el) {
  let lPos = parseInt(el.getAttribute("ispos"))
  if (lPos < 6) {
    el.classList.remove("pos" + String(lPos))
    el.classList.add("pos" + parseInt(lPos + 1))
    el.removeAttribute("ispos")
    el.setAttribute("ispos", parseInt(lPos + 1))
  } else {
    el.classList.remove("pos" + String(lPos))
    el.classList.add("pos" + String(1))
    el.removeAttribute("ispos")
    el.setAttribute("ispos", 1)
  }
}

function roundLoad() {
  if (document.documentElement.clientWidth < 891) return;
  let numbersEl = document.querySelectorAll(".slider__numbers")

  let lastNum = numbersEl[0]
  let numbers = []
  numbersEl.forEach(item => numbers.push(item))
  numbers.push(lastNum)
  numbers.shift()

  if (num < 6) {
    num += 1
    numbers.forEach((item, index) => {
      let numItem = item.getAttribute("num")
      let number = item.querySelector(".slider__numbers__num")
      let round = item.querySelector(".slider__numbers__round")
      let title = item.querySelector(".slider__numbers__title")
      if (numItem == num) {
        let prevEl = numbers[index - 1]
        let prevNumber = prevEl.querySelector(".slider__numbers__num")
        let prevRound = prevEl.querySelector(".slider__numbers__round")
        let prevTitle = prevEl.querySelector(".slider__numbers__title")

        prevNumber.classList.add("hide")
        prevRound.classList.remove("hide")
        prevTitle.classList.remove("slider__active")

        round.classList.add("hide")
        number.classList.remove("hide")
        title.classList.add("slider__active")
      }
    })
  } else {
    num = 1
    numbers.forEach((item, index) => {
      let numItem = item.getAttribute("num")
      let number = item.querySelector(".slider__numbers__num")
      let round = item.querySelector(".slider__numbers__round")
      let title = item.querySelector(".slider__numbers__title")
      if (numItem == "6") {
        let nextEl = numbers[0]
        let nextNumber = nextEl.querySelector(".slider__numbers__num")
        let nextRound = nextEl.querySelector(".slider__numbers__round")
        let nextTitle = nextEl.querySelector(".slider__numbers__title")

        nextNumber.classList.remove("hide")
        nextRound.classList.add("hide")
        nextTitle.classList.add("slider__active")

        round.classList.remove("hide")
        number.classList.add("hide")
        title.classList.remove("slider__active")
      }
    })
  }
}