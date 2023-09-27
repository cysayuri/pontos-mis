const filterBtn = document.querySelector('.programacao__filter-btn')
const filterField = document.querySelector('.programacao__filter-select')

let filterSelect = document.querySelectorAll('.programacao__filter-select option')

let programMap = document.querySelectorAll('.programacao__map-cores svg')
let programItem = document.querySelectorAll('.programacao__list-item')

const programEmpty = document.querySelector('.programacao__list-empty')
const emptyResult = document.querySelector('#empty')
const select = document.querySelector('#cities')
const on = document.querySelector('#on')


/*-- ------- Botão ------- --*/

filterBtn.addEventListener('click', () => {
    filterBtn.classList.add('disabled')
    filterField.classList.add('active')
})

select.addEventListener('change', (event) => {
    qtd = 0
    
    city = select.options[select.selectedIndex].text
    emptyResult.innerHTML = ''
    on.innerHTML = ''
    
    filterSelect.forEach(elem => {
        itemValue = event.target.value;
    })
    
    programItem.forEach(elem => {
        if ((elem.classList.contains(itemValue) || (itemValue == 'todos'))) {
            qtd++
            elem.classList.remove('disabled')
            programEmpty.classList.remove('active')
        } else {
            elem.classList.add('disabled')
        }
    })
    
    if ((qtd == 0) && (itemValue == 'todos')) {
        emptyResult.innerHTML += ''
        programEmpty.classList.add('active')
    } else if ((qtd == 0) && (itemValue == 'online')) {
        on.innerHTML += '<b>' + city + '</b>'
        programEmpty.classList.add('active')
    } else if (qtd == 0) {
        emptyResult.innerHTML += 'em <b>' + city + '</b>'
        programEmpty.classList.add('active')
    }
    
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