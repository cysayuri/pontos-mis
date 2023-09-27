const filterBtn = document.querySelector('.programacao__filter-btn')
const filterField = document.querySelector('.programacao__filter-select')

let filterSelect = document.querySelectorAll('.programacao__filter-select option')

let programMap = document.querySelectorAll('.programacao__map-cores svg')
let programItem = document.querySelectorAll('.programacao__list-item')

/*-- ------- Botão ------- --*/

filterBtn.addEventListener('click', () => {
    filterBtn.classList.add('disabled')
    filterField.classList.add('active')
})


filterField.addEventListener('change', (event) => {
    filterSelect.forEach(elem => {
        itemValue = event.target.value;
    })

    programItem.forEach(elem => {
        if (elem.classList.contains(itemValue)) {
            elem.classList.remove('disabled')
        } else {
            elem.classList.add('disabled')
        }
    })
    
    programMap.forEach(elem => {
        elem.classList.remove('active')
    })
})


/*-- ------- Mapa ------- --*/

programMap.forEach(elem => {
    elem.addEventListener('click', () => {
        filterBtn.classList.remove('disabled')
        filterField.classList.remove('active')
        
        programMap.forEach(elem => {
            elem.classList.remove('active')
        })
        
        programItem.forEach(idx => {
            idx.classList.remove('disabled')
        })
    
        mapId = elem.getAttribute('id')

        programItem.forEach(idx => {
            itemId = idx.getAttribute('value')

            if (!(mapId == ('mapa-' + itemId))) {
                elem.classList.add('active')
                idx.classList.add('disabled')
            }
        })
    })
})