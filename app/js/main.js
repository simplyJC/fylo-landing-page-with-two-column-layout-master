const inputHero = document.querySelector('.hero__email');
const inputCta = document.querySelector('.cta__email');
const infoTextHero = document.querySelector('.hero__info-text');
const forms = document.querySelectorAll('.email-form');
const inputs = document.querySelectorAll('.email-form input');
const infoTextCta = document.querySelector('.cta__info-text');

const buttonHero = document.querySelector('.hero__button');
const buttonCta = document.querySelector('.cta__button');

buttonHero.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateEmail(inputHero.value)) {
    infoTextHero.innerHTML = 'Please Check your Email';
    infoTextHero.style.color = 'blue';
     inputHero.value = '';
  } else {
    infoTextHero.innerHTML = 'Incorrect Email Format';
    infoTextHero.style.color = 'red';
  }
});

buttonCta.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateEmail(inputCta.value)) {
    infoTextCta.innerHTML = 'Please Check your Email';
    infoTextCta.style.color = 'blue';
    inputCta.value= "";
  } else {
    infoTextCta.innerHTML = 'Incorrect Email Format';
    infoTextCta.style.color = 'red';
  }
});


function validateEmail(email) {
  let emailCheck =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailCheck.test(String(email).toLowerCase());
}
