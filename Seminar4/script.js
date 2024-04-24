"use strict";


// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const input = document.getElementById('from');
const span = document.getElementById('span');

function updateSpan(){
    span.textContent = input.value;
}
input.addEventListener('input', updateSpan);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
document.addEventListener("DOMContentLoaded", function(){
    const messageBtn = document.querySelector(".messageBtn");
    const message = document.querySelector(".message");

    messageBtn.addEventListener("click", function(){
        message.classList.add("animate_animated", "animate_fadeInLeftBig");
       
    });
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, 
// форма не должна отправляться, также должны быть подсвечены незаполненные поля 
// (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, 
// необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// const password = '123456';
// const divEl = document.querySelector('div.container');
// const inputEl = divEl.querySelector('input.password');
// const btnEl = divEl.querySelector('button.btn');
// btnEl.addEventListener('click', function (e) {
// if (inputEl.value === password) {
// inputEl.classList.remove('bord-red');
// inputEl.classList.add('bord-green');
// } else {
// inputEl.classList.remove('bord-green');
// inputEl.classList.add('bord-red');
// }
// });

const formEls = document.querySelectorAll('form');
const inputEls = document.querySelectorAll('form input');
const selectEls = document.querySelectorAll('form select');
const submitBtn = document.querySelector('form button');

submitBtn.onclick = () => {
    checkInput(inputEls);
    checkInput(selectEls);
    let flag = document.querySelector('.error');
    if (typeof flag !== 'undefined') donotSubmit();
}

function checkInput(inputEls) {
    inputEls.forEach(element => {
        if (element.value === '') {
            element.classList.toggle('error');
        } else {
            if (element.classList.contains('error')) {
                element.classList.remove('error');
            }
        }
    })
};
