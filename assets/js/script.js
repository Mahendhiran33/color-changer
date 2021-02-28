const colorCode = [
    "#333333",
    "#4F4F4F",
    "#828282",
    "#BDBDBD",
    "#E0E0E0",
    "#F2F2F2",
    "#EB5757",
    "#F2994A",
    "#F2C94C",
    "#219653",
    "#27AE60",
    "#6FCF97",
    "#2F80ED",
    "#2D9CDB",
    "#56CCF2",
    "#9B51E0",
    "#BB6BD9",
];

const detailsOne = document.querySelector(".details__one");
const detailsTwo = document.querySelector(".details__two");
const colorCodeText = document.querySelectorAll(".color__code");
const colorContainer = document.querySelector(".color__container");
const colorBox = document.querySelectorAll(".color__box");

colorBox.forEach((colors, i) => (colors.style.backgroundColor = colorCode[i]));

colorContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("color__box")) {
        detailsTwo.style.backgroundColor = detailsOne.style.color = colorCodeText[1].innerHTML = colorCodeText[0].innerHTML =
            colorCode[e.target.dataset.color - 1];
        [...colorBox].map(colors=>colors.classList.remove("active"));
        e.target.classList.add("active")
    }
});
