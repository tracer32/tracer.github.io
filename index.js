'use strict'
// чекбокс
/* вариант 1
const checkbox = document.getElementById('discount-checkbox');
checkbox.addEventListener('change', function(){
    if (this.checked){
        this.nextElementSibling.classList.add('checked');
    }
        else {
            this.nextElementSibling.classList.remove('checked');  
        }
}); */

// вариант 2
const checkbox = document.querySelectorAll('.filter-check_checkbox');
for (let i=0; i<checkbox.length; i++){
checkbox[i].addEventListener('change', function(){
    if (this.checked){
        this.nextElementSibling.classList.add('checked');
    }
        else {
            this.nextElementSibling.classList.remove('checked');  
        }
}); 
}
// конец чекбокса

// корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');
btnCart.addEventListener('click', () => {
modalCart.style.display = 'flex';
document.body.style.overflow = 'hidden'
});
closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
    });

// конец корзины


// работа с корзиной
const cards = document.querySelectorAll('.goods .card'),
cartWrapper = document.querySelector('.cart-wrapper'),
cartEmpty = document.getElementById('cart-empty'),
countGoogs = document.querySelector('.counter')

cards.forEach( (card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
       const cardClone = card.cloneNode(true);
       cartWrapper.appendChild(cardClone);
       cartEmpty.remove();
       showData();
    });
});
function showData(){
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoogs.textContent = cardsCart.length;
    
}

//конец работы с корзиной