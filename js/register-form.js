let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  const x = document.getElementsByClassName("tab");
  x[n].style.display = "flex";

  fixStepIndicator(n);
}

function next() {
  const x = document.getElementsByClassName("tab");
  if (!validateForm()) return false;

  if (currentTab == x.length - 1) {
    window.location = "index.html";
    return;
  }

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
  // document.querySelector(".my-label").classList.remove("animated-label");
  document.querySelector(".my-label").classList.add("move-label");
  document.querySelector(".my-button").classList.add("move-btn");
  setTimeout(() => {
    document.querySelector(".my-label").classList.remove("move-label");
    document.querySelector(".my-button").classList.remove("move-btn");
    x[currentTab].style.display = "none";
    currentTab = n;
    showTab(currentTab);
    fixStepIndicator(n);
  }, 300);
}

function validateForm() {
  // This function deals with validation of the form fields
  let tabs,
    inputs,
    selects,
    i,
    valid = true;
  tabs = document.getElementsByClassName("tab");
  inputs = tabs[currentTab].getElementsByTagName("input");
  selects = tabs[currentTab].querySelectorAll(".select-menu");

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputs[i].className += " invalid";
      valid = false;
    }
  }

  for (i = 0; i < selects.length; i++) {
    if (selects[i].querySelector(".sBtn-text").dataset.value == "") {
      selects[i].className += " invalid";
      valid = false;
    }
  }

  return valid;
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", function () {
    this.classList.remove("invalid");
  });
});

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
  select.addEventListener(
    "click",
    function (e) {
      e.target.parentNode.classList.toggle("active");
    },
    true
  );
});

options.forEach((option) => {
  option.addEventListener("click", function (e) {
    let selectedOption = e.target.innerText;
    document.querySelector(".active .sBtn-text").innerText = selectedOption;
    document.querySelector(".active .sBtn-text").dataset.value = selectedOption;

    option.parentNode.parentNode.classList.remove("active");

    if (selectedOption !== "") {
      option.parentNode.parentNode.classList.remove("invalid");
    }
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
