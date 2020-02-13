import itemsCollection from "../menu";
import markup from "../template.hbs";
import "./styles.css";

const list = document.querySelector(".js-menu");
const switchBtn = document.querySelector(".js-switch-input");
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

if (
  localStorage.getItem("theme") &&
  localStorage.getItem("theme") === "dark-theme"
) {
  document.body.classList.add(localStorage.getItem("theme"));
  switchBtn.checked = true;
}

function createMarkup(items) {
  list.insertAdjacentHTML(
    "afterbegin",
    items.map(item => markup(item)).join("")
  );
}
createMarkup(itemsCollection);

switchBtn.addEventListener("change", handleCheckBoxClick);
function handleCheckBoxClick() {
  if (switchBtn.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  }
}
