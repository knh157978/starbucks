const searchEl = document.querySelector('.search')
const searchElInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function () {
    searchElInputEl.focus();
});
searchElInputEl.addEventListener('focus', function () {
    searchEl.classList.add("focused");
    searchElInputEl.setAttribute('placeholder', '통합검색');
});
searchElInputEl.addEventListener('blur', function () {
    searchEl.classList.remove("focused");
    searchElInputEl.setAttribute('placeholder', '');
});
const thisYear =  document.querySelector('.this-year');
thisYear.textContent =  new Date().getFullYear();
