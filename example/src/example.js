import * as graphemes from "graphemes";

function setup() {
  const input = document.querySelector("#text-in");
  const list = document.querySelector("#graphemes-out");

  function renderGraphemes() {
    while (list.firstChild) list.removeChild(list.firstChild);

    for (const g of graphemes.default(input.value)) {
      const li = document.createElement("li");
      li.textContent = g;
      list.appendChild(li);
    }
  }

  input.addEventListener("input", renderGraphemes);
  renderGraphemes();
}

setup();
