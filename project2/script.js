"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_close_modal = document.querySelector(".close-modal");
const btn_show_modal = document.querySelectorAll(".show-modal");

const open_modal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const close_modal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btn_show_modal.length; i++)
    btn_show_modal[i].addEventListener("click", open_modal);

btn_close_modal.addEventListener("click", close_modal);
overlay.addEventListener("click", close_modal);

document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("hidden"))
        if (event.key === "Escape") close_modal();
});
