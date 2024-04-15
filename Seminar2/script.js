"use strict";


// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach(item => {
    item.classList.add('super-dropdown');
});
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// const btnEl = document.querySelector('.btn');
// if (btnEl.classList.contains('btn-secondary')){
//     btnEl.contains.remove('btn-secondary');
// } else{
//     btnEl.contains.add('btn-secondary');
// }

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector('menu');
if (menuEl.classList.contains('dropdown-menu')){
    menuEl.classList.remove('dropdown-menu');
};

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dropdownDiv = document.querySelector('.dropdown');
const linkHtml = '<a href="#">link</a>';
dropdownDiv.innerAdjacentHTML('afterend', linkHtml);
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropdownButton = document.querySelector('dropdownMenuButton');
dropdownButton.id = 'superDropdown';

// 6. У элемента с id "dropdownMenuButton" замените id на "superDropdown".


// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownToggle = document.querySelector('.droptoun-toggle');
dropdownToggle.classList.remove('type');
