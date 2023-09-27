/*-- ------- Botão ------- --*/

const filterBtn = document.querySelector('.programacao__filter-btn')
const filterSelect = document.querySelector('.programacao__filter-select')

filterBtn.addEventListener('click', () => {
    filterBtn.classList.add('disabled')
    filterSelect.classList.add('active')
})






/*-- ------- Mapa ------- --*/

let programMap = document.querySelectorAll('.programacao__map-cores svg')
let programItem = document.querySelectorAll('.programacao__list-item')

programMap.forEach(elem => {
    elem.addEventListener('click', () => {
        filterBtn.classList.remove('disabled')
        filterSelect.classList.remove('active')
        
        programMap.forEach(elem => {
            elem.classList.remove('active')
        })
        
        programItem.forEach(idx => {
            idx.classList.remove('disabled')
        })
    
        mapId = elem.getAttribute('id')

        programItem.forEach(idx => {
            itemId = idx.getAttribute('id')

            if (!(mapId == ('mapa-' + itemId))) {
                elem.classList.add('active')
                idx.classList.add('disabled')
            }
        })
    })
})