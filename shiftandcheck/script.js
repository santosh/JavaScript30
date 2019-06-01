// TODO: Keep todo item in local storage, so it can retain even after closing the tab.

let button = document.querySelector("#enter");
let input = document.querySelector("#userinput");
let ul = document.querySelector("ul");
let lastChecked;
let checkboxes;

function handleCheck(e) {
  // check if the shift key is down
  // and check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let label = document.createElement("label");
  label.style.paddingLeft = "5px";
  label.appendChild(document.createTextNode(input.value));

  li.appendChild(checkbox);
  li.className = "list-group-item list-group-item-info";
  li.appendChild(label);
  ul.appendChild(li);
  input.value = "";
  
  checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
}

function setDone(event) {
  if (event.target.className === "list-group-item list-group-item-info") {
    event.target.className = "list-group-item list-group-item-success";
    // get the checkbox, and checbox.checked = true
    event.target.firstChild.checked = true;
  } else if (
    event.target.className === "list-group-item list-group-item-success"
  ) {
    ul.removeChild(event.target);
  }
  // event.target.className += " list-group-item-success";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.addEventListener("click", setDone);

