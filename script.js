
document.body.innerHTML = `
 <div id="categories" class="div"></div>
 <button id="addButton" class="sd">Add</button>
`;
const divElement = document.getElementById("categories");
const categories = ["Yaşlılar üçün", "Böyüklər üçün", "Kiçiklər üçün"];
for (const category of categories) {
    divElement.innerHTML += `
     <input type="radio" id="radio" name="category" value="${category}">
     <label>${category}</label>
 `;
}
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addButtonClicked);
function addButtonClicked() {
    const selectedRadio = document.querySelector('input[name="category"]:checked');
    if (selectedRadio) {
        console.log("kategori: " + selectedRadio.value);
    } else {
        console.log("kategori seçin.");
    }
}


const containerDiv = document.createElement("div");
containerDiv.className = "div2";
const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "textInput";
inputElement.placeholder = "Yazin";
const openButton = document.createElement("button");
const closeButton = document.createElement("button");
closeButton.className = "sf";
closeButton.textContent = "Close";
closeButton.onclick = closeInput;
openButton.className = "sf";
openButton.textContent = "Open";
openButton.onclick = openInput;
openButton.disabled = true;

containerDiv.appendChild(inputElement);

containerDiv.appendChild(closeButton);
containerDiv.appendChild(openButton);
document.body.appendChild(containerDiv);
 function closeInput() {
    inputElement.disabled = true;
    closeButton.disabled = true;
    openButton.disabled = false;
}
function openInput() {
    inputElement.disabled = false;
    openButton.disabled = true;
    closeButton.disabled = false;
}
