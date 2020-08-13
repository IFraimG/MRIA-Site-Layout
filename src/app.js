import "./scss/main.scss"
import "./scss/media.css"

import { slider } from "./slider.js"
import { modal } from "./modal.js"

import img from "./assets/main-img.png"
import quoteImg from "./assets/icon-quote.png"
import rosp from "./assets/mria-team-sign.png"
import logoImg from "./assets/logo-top.png"
import foneImg from "./assets/imgs.png"
import sliderLogoOne from "./assets/ill-checkup.png"
import sliderLogotwo from "./assets/heart-logo.png"
import sliderLogoThree from "./assets/ill-nutrition.png"
import sliderLogoFour from "./assets/ill-workouts.png"
import sliderLogoFive from "./assets/ill-nutraceutical.png"
import sliderLogoSix from "./assets/ill-recreation.png"

let getImg = document.querySelector("#getImg")
let quoteEl = document.querySelector("#quote")
let rospEl = document.querySelector("#rosp")
let logoEl = document.querySelector("#imgLogo")
let foneEl = document.querySelector("#fone")

let logoSliderEl = document.querySelector("#sliderLogoOne")
let logoSliderEl2 = document.querySelector("#sliderLogoTwo")
let logoSliderEl3 = document.querySelector("#sliderLogoThree")
let logoSliderEl4 = document.querySelector("#sliderLogoFour")
let logoSliderEl5 = document.querySelector("#sliderLogoFive")
let logoSliderEl6 = document.querySelector("#sliderLogoSix")

document.addEventListener("DOMContentLoaded", event => {
  getImg.src = img
  quoteEl.src = quoteImg
  rospEl.src = rosp
  logoEl.src = logoImg
  foneEl.src = foneImg

  logoSliderEl.src = sliderLogoOne
  logoSliderEl2.src = sliderLogotwo
  logoSliderEl3.src = sliderLogoThree
  logoSliderEl4.src = sliderLogoFour
  logoSliderEl5.src = sliderLogoFive
  logoSliderEl6.src = sliderLogoSix
  
  slider()
  modal()
})