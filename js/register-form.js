let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  const x = document.getElementsByClassName("tab");
  x[n].style.display = "grid";

  fixStepIndicator(n);
}

function next() {
  const x = document.getElementsByClassName("tab");

  x[currentTab].style.display = "none";

  currentTab++;

  showTab(currentTab);
}

function fixStepIndicator(n) {
  let i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    x[i].className = x[i].className.replace(" finish", "");
  }

  x[n].className += " active";

  if (currentTab > 0) {
    for (i = 0; i < n; i++) {
      document.getElementsByClassName("step")[i].className += " finish";
    }
  }
}

function goToTab(n) {
  const x = document.getElementsByClassName("tab");

  x[currentTab].style.display = "none";
  currentTab = n;
  showTab(currentTab);
  fixStepIndicator(n);
}

document
  .querySelector("#register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = document.querySelector(".select-btn"),
  options = document.querySelectorAll(".option"),
  sBtn_text = document.querySelector(".sBtn-text");

const menus = document.querySelectorAll(".select-btn");

menus.forEach((select) => {
  select.addEventListener("click", function (e) {
    e.target.parentNode.classList.toggle("active");
  });
});

options.forEach((option) => {
  option.addEventListener("click", function (e) {
    let selectedOption = e.target.innerText;
    document.querySelector(".active .sBtn-text").innerText = selectedOption;

    option.parentNode.parentNode.classList.remove("active");
  });
});

let preferPeople = 2;

const number = document.querySelector(".number");

document.querySelector(".decrement-btn").addEventListener("click", function () {
  if (preferPeople > 0) {
    preferPeople--;
    number.innerText = preferPeople;
  }
});

document.querySelector(".increment-btn").addEventListener("click", function () {
  preferPeople++;
  number.innerText = preferPeople;
});
