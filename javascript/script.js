const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navLinks = document.querySelectorAll('.links');
const form = document.querySelector('#form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email')
const inputFlower = document.querySelector('#flowerName');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

mainMenu.addEventListener('click', function (e) {
	if (e.target.className == 'links') {
		mainMenu.classList.add('hide');
	}
});

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-105%';
}

form.addEventListener('submit', validate);

function validate(e) {
  e.preventDefault(); 
  
  if (inputName.value == '') {
    alert('Please fill in a valid name')
    return
  }

  if (inputEmail.value == '') {
		alert('Please fill in a valid email address');
    return
  }

  if (inputFlower.value == '') {
    alert('Please fill in the flower name that you\'ll like to order')
    return
  }
 
  if (inputName.value != '' && inputEmail.value != '' && inputFlower.value != '') {
    alert(`Thanks ${inputName.value} for contacting us about ${inputFlower.value} \n We'll get back to you via your email`)
  }
}