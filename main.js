// closing menu user
const checkBoxUser = document.querySelector('.user__menu-label')
const labelUser = document.querySelector('.user__label')

labelUser.onclick = (event) => {
    event.stopPropagation();
}

document.onclick = () => {
    if (checkBoxUser.checked){
        labelUser.click();
    }
}

// navbar search focus

const overlaySearch = document.querySelector('.header__navbar-search-overlay')
const inputSearch = document.querySelector('.header__navbar-search-input')

overlaySearch.onclick = () => {
    overlaySearch.classList.add('hide');
    inputSearch.focus();
}

inputSearch.onblur = () => {
    overlaySearch.classList.remove('hide');
}