const selectElem = document.querySelector('#mode-choice');
const logo = document.querySelector('#logos img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    const current = selectElem.value;

    if (current === 'dark') {
        document.body.classList.add('dark-mode');
        logo.src = 'byui-logo-white.png';
    } else if (current === 'light') {
        document.body.classList.remove('dark-mode');
        logo.src = 'byui-logo-blue.webp';
    }
}
