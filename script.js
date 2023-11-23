const showSelected = () => {
    const radios = document.getElementsByName('selectradio');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log(`Secilmis: ${radios[i].value}`);
            break;
        }
    }
};
const textInput = document.getElementById('textInput');
const closeBtn = document.getElementById('closeclick');
const openBtn = document.getElementById('openclick');
closeBtn.addEventListener('click', closeClick);
openBtn.addEventListener('click', openClick);
function closeClick() {
    textInput.value = '';
    textInput.disabled = true;
    closeBtn.disabled = true;
    openBtn.disabled = false;
}
function openClick() {
    textInput.disabled = false;
    textInput.focus();
    closeBtn.disabled = false;
    openBtn.disabled = true;
}
openClick();
