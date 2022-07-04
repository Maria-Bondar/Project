//Модальне вікно з реєстрацією
let modal = document.getElementById("myModal");
let btnOrder = document.getElementById("buttonOrder");
let span = document.getElementsByClassName("close")[0];

btnOrder.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let inputs = document.querySelector(".input-name");
let inputName = document.querySelector("#name");
let inputNumber = document.querySelector("#number");
let btnRegister = document.querySelector("#buttonRegistration");
let specialist = document.querySelector("#person");
let beauty = document.querySelector("#beauty-list");
let dateCalendar = document.querySelector("#datepicker");
//Перевірка, чи заповнені поля і чи правильно заповнені
btnRegister.disabled = true;

inputs.addEventListener("change", function () {
  if (inputName.value === "" || inputNumber.value === "") {
    btnRegister.disabled = true;
  } else {
    btnRegister.disabled = false;
  }
});
inputNumber.addEventListener("input", function () {
  console.log(this.value);
  this.value = this.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
});

inputName.addEventListener("input", function () {
  console.log(this.value);
  this.value = this.value.replace(/[0-9\.]/g, "");
});

//Робота кнопки "записатися" і створення тексту в друге модальне вікно
let beautyList = document.querySelector("#beauty-list");
btnRegister.addEventListener("click", function () {
  // $(function () {
  //   $("#datepicker").datepicker();
  // });
  localStorage.setItem("name", inputName.value);
  localStorage.setItem("number", inputNumber.value);
  localStorage.setItem("specialist", specialist.value);
  localStorage.setItem("beauty", beauty.value);
  localStorage.setItem("date", dateCalendar.value);
  $("#myModal").hide();
  let nameUser = localStorage.getItem("name");
  let nameSpecialist = localStorage.getItem("specialist");
  let beautyServices = localStorage.getItem("beauty");
  let dateUser = localStorage.getItem("date");
  let messageUser = document.querySelector("p.textOrder2");
  messageUser.innerText = `Привіт ${nameUser}! Ви записалися до спеціаліста – ${nameSpecialist} на послугу "${beautyServices}" на ${dateUser}. Найближчим часом з вами зв'яжеться адміністратор Skincare :)`;
});

//Створення ще одного модального війна
let modal2 = document.getElementById("myModal2");
let btnOrder2 = document.getElementById("buttonRegistration");
let span2 = document.getElementsByClassName("close2")[0];

btnOrder2.onclick = function () {
  modal2.style.display = "block";
};
span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal.style.display = "none";
  }
};

let btnClose = document.querySelector("#buttonClose");
btnClose.addEventListener("click", function () {
  $("#myModal2").hide();
});

// Кнопки "Показати ціни"
//Кнопка 1 "Косметологія"
let buttonPriceCosmetology = document.querySelector("#showCosmetologyPrice");
buttonPriceCosmetology.addEventListener("click", function () {
  let firstCosmetology = document.querySelector(".firstCosmetology");
  firstCosmetology.style.visibility = "visible";
  firstCosmetology.innerText = "500 грн";
  let secondCosmetology = document.querySelector(".secondCosmetology");
  secondCosmetology.style.visibility = "visible";
  secondCosmetology.innerText = "800 грн";
  let thirdCosmetology = document.querySelector(".thirdCosmetology");
  thirdCosmetology.style.visibility = "visible";
  thirdCosmetology.innerText = "1000 грн";
  let fourthCosmetology = document.querySelector(".fourthCosmetology");
  fourthCosmetology.style.visibility = "visible";
  fourthCosmetology.innerText = "1000 грн";
  let fifthCosmetology = document.querySelector(".fifthCosmetology");
  fifthCosmetology.style.visibility = "visible";
  fifthCosmetology.innerText = "2000 грн";
  let sixthCosmetology = document.querySelector(".sixthCosmetology");
  sixthCosmetology.style.visibility = "visible";
  sixthCosmetology.innerText = "1000 грн";
});

//Кнопка 2 "Масаж"
let buttonPriceMassage = document.querySelector("#showMassagePrice");
buttonPriceMassage.addEventListener("click", function () {
  let firstMassage = document.querySelector(".firstMassage");
  firstMassage.style.visibility = "visible";
  firstMassage.innerText = "500 грн";
  let secondMassage = document.querySelector(".secondMassage");
  secondMassage.style.visibility = "visible";
  secondMassage.innerText = "500 грн";
  let thirdMassage = document.querySelector(".thirdMassage");
  thirdMassage.style.visibility = "visible";
  thirdMassage.innerText = "1000 грн";
  let fourthMassage = document.querySelector(".fourthMassage");
  fourthMassage.style.visibility = "visible";
  fourthMassage.innerText = "1000 грн";
  let fifthMassage = document.querySelector(".fifthMassage");
  fifthMassage.style.visibility = "visible";
  fifthMassage.innerText = "1000 грн";
  let sixthMassage = document.querySelector(".sixthMassage");
  sixthMassage.style.visibility = "visible";
  sixthMassage.innerText = "800 грн";
});

//Кнопка 3 "Нігті"
let buttonPriceNail = document.querySelector("#showNailPrice");
buttonPriceNail.addEventListener("click", function () {
  let firstNail = document.querySelector(".firstNail");
  firstNail.style.visibility = "visible";
  firstNail.innerText = "500 грн";
  let secondNail = document.querySelector(".secondNail");
  secondNail.style.visibility = "visible";
  secondNail.innerText = "200 грн";
  let thirdNail = document.querySelector(".thirdNail");
  thirdNail.style.visibility = "visible";
  thirdNail.innerText = "300 грн";
  let fourthNail = document.querySelector(".fourthNail");
  fourthNail.style.visibility = "visible";
  fourthNail.innerText = "700 грн";
  let fifthNail = document.querySelector(".fifthNail");
  fifthNail.style.visibility = "visible";
  fifthNail.innerText = "600 грн";
  let sixthNail = document.querySelector(".sixthNail");
  sixthNail.style.visibility = "visible";
  sixthNail.innerText = "300 грн";
});

//Кнопка 4 "Брови і вії"
let buttonPriceBrow = document.querySelector("#showBrowPrice");
console.log(buttonPriceBrow);
buttonPriceBrow.addEventListener("click", function () {
  console.log("test");
  let firstBrow = document.querySelector(".firstBrow");
  firstBrow.style.visibility = "visible";
  firstBrow.innerText = "300 грн";
  let secondBrow = document.querySelector(".secondBrow");
  secondBrow.style.visibility = "visible";
  secondBrow.innerText = "200 грн";
  let thirdBrow = document.querySelector(".thirdBrow");
  thirdBrow.style.visibility = "visible";
  thirdBrow.innerText = "500 грн";
  let fourthBrow = document.querySelector(".fourthBrow");
  fourthBrow.style.visibility = "visible";
  fourthBrow.innerText = "600 грн";
  let fifthBrow = document.querySelector(".fifthBrow");
  fifthBrow.style.visibility = "visible";
  fifthBrow.innerText = "200 грн";
  let sixthBrow = document.querySelector(".sixthBrow");
  sixthBrow.style.visibility = "visible";
  sixthBrow.innerText = "400 грн";
});

//Поява тексту при наведенні мишки на фото

let doctor1 = document.querySelector(".doctor-photo1");
doctor1.addEventListener("mouseover", function () {
  let textPhoto1 = document.querySelector(".textPhoto1");
  textPhoto1.style.visibility = "visible";
});

doctor1.addEventListener("mouseout", function () {
  let textPhoto1 = document.querySelector(".textPhoto1");
  textPhoto1.style.visibility = "hidden";
});

let doctor2 = document.querySelector(".doctor-photo2");
doctor2.addEventListener("mouseover", function () {
  let textPhoto2 = document.querySelector(".textPhoto2");
  textPhoto2.style.visibility = "visible";
});

doctor2.addEventListener("mouseout", function () {
  let textPhoto2 = document.querySelector(".textPhoto2");
  textPhoto2.style.visibility = "hidden";
});

let doctor3 = document.querySelector(".doctor-photo3");
doctor3.addEventListener("mouseover", function () {
  let textPhoto3 = document.querySelector(".textPhoto3");
  textPhoto3.style.visibility = "visible";
});

doctor3.addEventListener("mouseout", function () {
  let textPhoto3 = document.querySelector(".textPhoto3");
  textPhoto3.style.visibility = "hidden";
});

let doctor4 = document.querySelector(".doctor-photo4");
doctor4.addEventListener("mouseover", function () {
  let textPhoto4 = document.querySelector(".textPhoto4");
  textPhoto4.style.visibility = "visible";
});

doctor4.addEventListener("mouseout", function () {
  let textPhoto4 = document.querySelector(".textPhoto4");
  textPhoto4.style.visibility = "hidden";
});

let doctor5 = document.querySelector(".doctor-photo5");
doctor5.addEventListener("mouseover", function () {
  let textPhoto5 = document.querySelector(".textPhoto5");
  textPhoto5.style.visibility = "visible";
});

doctor5.addEventListener("mouseout", function () {
  let textPhoto5 = document.querySelector(".textPhoto5");
  textPhoto5.style.visibility = "hidden";
});

//Робота зі слайдами / відгуки

let slider = document.querySelector(".slider"),
  sliderList = slider.querySelector(".slider-list"),
  sliderTrack = slider.querySelector(".slider-track"),
  slides = slider.querySelectorAll(".slide"),
  arrows = slider.querySelector(".slider-arrows"),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  slide = function () {
    sliderTrack.style.transition = "transform .5s";
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slideWidth
    }px, 0px, 0px)`;
    prev.classList.toggle("disabled", slideIndex === 0);
    next.classList.toggle("disabled", slideIndex === --slides.length);
  };

arrows.addEventListener("click", function (event) {
  let target = event.target;
  if (target === next && slideIndex != slides.length - 2) {
    slideIndex++;
  } else if (target === prev && slideIndex != 0) {
    slideIndex--;
  }
  slide();
});
