//------------------------------------------------------
// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

//------------------------------------------------------

const input = document.querySelector('input');
const ul = document.querySelector('ul');
input.addEventListener('keyup', (event) => {
    let li = document.createElement('li');
    li.innerText = (event.key);      
    ul.appendChild(li);
});

//------------------------------------------------------


// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

//------------------------------------------------------

const input = document.querySelector('input');
input.addEventListener('keyup', () => console.log(document.querySelector('input').value));

//------------------------------------------------------


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

//------------------------------------------------------

const ul = document.querySelector('ul');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('.string');
    let li = document.createElement('li');
    li.innerText = (input.value);      
    ul.appendChild(li);
    input.value = "";
});

//------------------------------------------------------


// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

//------------------------------------------------------


const form = document.querySelector("form")
const inputf = form.querySelector('.text');
const inputs = form.querySelector('.string');
const select = form.querySelector('select');
const div = document.querySelector('div');
console.log(form, inputf, inputs, select, div )
let result = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();

//1)    
    if (select.value == "summ") {
        result = +inputf.value + +inputs.value;
    }
    if (select.value == "minu") {
        result = +inputf.value - +inputs.value;
    }
    if (select.value == "proi") {
        result = +inputf.value * +inputs.value;
    }
    if (select.value == "dell") {
        result = +inputf.value / +inputs.value;
    }
    div.innerText = result;

// 2)
    result = eval(`${+inputf.value} ${select.value} ${+inputs.value}`);    
    div.innerText = result;
});

//------------------------------------------------------


// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

//------------------------------------------------------
//transform:rotate(90deg)


const button = document.querySelector("button");

function getRand(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

button.addEventListener('mouseenter', (event) => {
    event.preventDefault();
    button.style.backgroundColor = `rgb(${getRand(0, 255)}, ${getRand(0, 255)}, ${getRand(0, 255)})`;
});

button.addEventListener('mouseleave', (event) => {
    event.preventDefault();
    button.style.transform = `rotate(${getRand(-180, 180)}deg)`
});



