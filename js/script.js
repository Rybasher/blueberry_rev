let burger = document.querySelector(".burger");
let nav = document.querySelector('.nav');

burger.addEventListener('click', function () {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})


let buttons = document.querySelectorAll('.product-button');

buttons.forEach((element) => {
    element.addEventListener('click', function () {
        buttons.forEach((element) => {
            element.classList.remove("active");
        })
        element.classList.add('active');
    })
})


let form_count = document.querySelectorAll(".count");

form_count.forEach((element) => {
    let count = element.querySelector('.count-number');
    let minus = element.querySelector('.count__minus');
    let plus = element.querySelector('.count__plus');
    minus.classList.add("active");
    minus.addEventListener('click', function (e) {
        e.preventDefault();
        if (Number(count.textContent) == 0) {

        }
        else {
            count.innerHTML = Number(count.textContent) - 1;
        }
    })
    plus.addEventListener('click', function (e) {
        e.preventDefault();
        count.innerHTML = Number(count.textContent) + 1;


    })
})