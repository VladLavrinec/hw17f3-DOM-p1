// 1. Створити розмітку з кнопкою та текстовим полем.
// За допомогою JavaScript отримати доступ до кнопки 
// та текстового поля за їх ідентифікаторами 
// та змінити текст на кнопці 
// на значення текстового поля.

const text = document.querySelector("#text");
const button = document.querySelector("#button");

button.textContent = text.textContent;


// 2 Створити розмітку з заголовком та зображенням. 
// За допомогою JavaScript отримати доступ до зображення 
// та змінити значення атрибута "src" на шлях 
// до іншого зображення.

const image = document.querySelector('#image');
image.src = 'https://klike.net/uploads/posts/2020-06/1593062461_18.jpg';
image.alt = '2';


// 3 Створити розмітку з посиланням та зображенням. 
// За допомогою JavaScript отримати доступ до посилання 
// та змінити значення атрибута "href" на нову URL-адресу. 
// Також отримати доступ до зображення 
// та додати новий атрибут "alt" з описом зображення.

const link = document.querySelector('a');
link.href = 'https://klike.net/uploads/posts/2020-06/1593062461_18.jpg'

const img2 = document.querySelector('.img');
img2.alt = 'зображення природи';


// 4 Створити розмітку зі списком елементів. 
// За допомогою JavaScript отримати доступ 
// до першого елемента списку 
// та змінити його вміст на новий текст.

let list = document.querySelector('ul');
let firstItem = list.firstElementChild;

firstItem.textContent = 'новий текст';