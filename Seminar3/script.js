"use strict";



// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener("DOMContentLoaded", function() {
    console.log("Все теги загружены");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener("load", function(){
    console.log("Страница прогрузилась")
});
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
document.addEventListener('click', function(e){
    if (e.target.tagName === 'div') {
        const classList = e.target.classList;
        const className = 'super_element';

        if (classList.contains(className)){
            console.log(`Класс "${className}" присутствует в элементе "${e.target.tagName.toLowerCase()}".`);

        } else {
            console.log(`Класс "${className}" отсутствует в элементе "${e.target.tagName.toLowerCase()}".`);
        }
    }
});
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textarea = document.querySelector('textarea');
textarea.addEventListener('mouseover', function(){
    console.log('Вы навели на textarea');
});
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
document.querySelector('ul').addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.textContent);
    }
});
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// Ответ: Порядок действия определяется последовательностью выполнения обработчиков событий и добавлением элементов в DOM.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
window.onload = function() {
    let listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
        if (i % 2 !== 0){
            listItems[i].classList.add("even");
        }
    }
};