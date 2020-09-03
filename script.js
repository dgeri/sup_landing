var openPopup = document.getElementsByClassName("popup-info")[0];
var popup = document.getElementsByClassName("section-popup")[0];
var closePopup = document.getElementsByClassName("btn-close")[0];

openPopup.addEventListener("click", function (e) {
  e.preventDefault();
  popup.style.display = "block";
});
closePopup.addEventListener("click", function (e) {
  e.preventDefault();
  popup.style.display = "none";
});

var price = document.getElementsByClassName("total-price-value")[0];
var form = document.getElementsByClassName("section-tickets-form")[0];
var enterTicket = document.getElementById("ticket");
var walkSunset = document.getElementById("walk");
var walkSupFirst = document.getElementById("walk-sup");
var walkSupSecond = document.getElementById("walk-sec");
var camp = document.getElementById("camp");
var totalPrice = 2000;
var walkSunsetCount = 0;
var walkSupFirstCount = 0;
var walkSupSecondCount = 0;

walkSunset.addEventListener("click", function () {
  if (walkSunset.checked) {
    totalPrice += 1250;
    walkSunsetCount++;
  } else if (!walkSunset.checked) {
    totalPrice -= 1250;
    walkSunsetCount--;
  }
  price.value = totalPrice;
  if (walkSunsetCount >= 15) {
    walkSunset.checked = false;
    alert("К сожалению, все места забронированы! Но Вы обязательно сможете попробовать SUP на месте!");
  }
});
walkSupFirst.addEventListener("click", function () {
  if (walkSupFirst.checked) {
    totalPrice += 1250;
    walkSupFirstCount++;
  } else if (!walkSupFirst.checked) {
    totalPrice -= 1250;
    walkSupFirstCount--;
  }
  price.value = totalPrice;
  if (walkSupFirstCount >= 15) {
    walkSupFirst.checked = false;
    alert("К сожалению, все места забронированы! Но Вы обязательно сможете попробовать SUP на месте!");
  }
});
walkSupSecond.addEventListener("click", function () {
  if (walkSupSecond.checked) {
    totalPrice += 1250;
    walkSupSecondCount++;
  } else if (!walkSupSecond.checked) {
    totalPrice -= 1250;
    walkSupSecondCount--;
  }
  price.value = totalPrice;
  if (walkSupSecondCount >= 15) {
    walkSupSecond.checked = false;
    alert("К сожалению, все места забронированы! Но Вы обязательно сможете попробовать SUP на месте!");
  }
});
camp.addEventListener("click", function () {
  if (camp.checked) {
    totalPrice += 250;
  } else if (!camp.checked) {
    totalPrice -= 250;
  }
  price.value = totalPrice;
});
