const filterBtn = document.querySelector('.programacao__filter-btn')
const filterSelect = document.querySelector('.programacao__filter-select')

filterBtn.addEventListener('click', () => {
    filterBtn.classList.add('disabled')
    filterSelect.classList.add('active')
})
