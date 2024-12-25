const headerStackLink = document.querySelector(".header__link_stack");
const headerContactsLink = document.querySelector(".header__link_contacts");

const cardStackButton = document.querySelector(".main__welcome_button_stack");
const cardContactsButton = document.querySelector(".main__welcome_button_contacts");
const cardStack = document.querySelector(".card_stack");
const cardContacts = document.querySelector(".card_contacts");

cardStackButton.addEventListener("click", function () {
  cardStack.classList.toggle("card_stack_active");
  cardStackButton.classList.toggle("main__buttons_active");
});

cardContactsButton.addEventListener("click", function () {
  cardContacts.classList.toggle("card_contacts_active");
  cardContactsButton.classList.toggle("main__buttons_active");
});

headerStackLink.addEventListener("click", function () {
  cardStack.classList.toggle("card_stack_active");
  cardStackButton.classList.toggle("main__buttons_active");
});

headerContactsLink.addEventListener("click", function () {
  cardContacts.classList.toggle("card_contacts_active");
  cardContactsButton.classList.toggle("main__buttons_active");
});
