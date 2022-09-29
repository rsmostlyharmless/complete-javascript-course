'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const keyDown = function (k) {
  if (k.key === `Escape` && !modal.classList.add(`hidden`)) {
    closeModal();
  }
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, keyDown);
