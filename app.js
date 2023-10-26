const inputField = document.querySelector("[data-id='input-el'");
const saveInputBtn = document.querySelector("[data-id='input'");
const saveTabBtn = document.querySelector("[data-id='tab'");
const deleteBtn = document.querySelector("[data-id='delete'");
const leadWrapper = document.querySelector("[data-id='lead-wrapper'");


saveInputBtn.addEventListener("click", saveInput);
saveTabBtn.addEventListener("click", saveTab);
deleteBtn.addEventListener("click", deleteAll);




function createlinkEl() {
    linkEl = document.createElement("a");
    linkEl.setAttribute("data-id", "lead");
    linkEl.setAttribute("target", "_blank");
    leadWrapper.appendChild(linkEl);
}

function saveInput() {
    createlinkEl();
    linkEl.textContent = inputField.value;
    inputField.value = "";
    linkEl.setAttribute("href", inputField.value);
}

function saveTab() {
    const url = location.href;
    createlinkEl();
    linkEl.textContent = url;
    linkEl.setAttribute("href", url);
}

function deleteAll() {
    while (leadWrapper.hasChildNodes()) {
        leadWrapper.removeChild(leadWrapper.firstChild);
    }
}

console.log("hello extension");






